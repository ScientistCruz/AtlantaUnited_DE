from fastapi import FastAPI, HTTPException, Depends, Body, Header, Request
import os
import sys
import pathlib
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
import pandas as pd
import math

dname = os.path.dirname(os.path.abspath(__file__))
parent_dir = pathlib.Path(dname).parents[0]
print(parent_dir)
utils = os.path.join(parent_dir,'utilities')
dev_test_data = os.path.join(dname,'dev_test_data')

print(utils)
sys.path.insert(0, utils)

import utilities
from utilities.utils import sql_server


connection = sql_server(server = 'sql_server' , username = 'sa', port = 1443, password = 'tEST1234')


print('API Connected!')

# Create the FastAPI App   
app = FastAPI(
    title="Fast API Example",
    description="Example API",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins = ['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*']
)


@app.get("/query/", tags=['testing'])
# This endpoint is to be used
async def query_read(request: Request):

    database = request.headers.get('database')
    table = request.headers.get('table')
    columns = request.headers.get('columns')
    page = request.headers.get('page')
    limit = request.headers.get('limit')

    print(database, table, columns, page, limit)

    def read(database = '', table = '', limit = 0,  columns = '', page = 1):
        
        if (database == '') or (table == ''):
            return {'ERROR: No Database or Table defined!'}
        else:
            pass

        if (len(columns) > 1):
            columns = ", ".join(columns)
        elif (len(columns) == 1) and (columns[0] == '*'):
            columns = ' * '
        else:
            return {'ERROR: No Columns defined!'}
            
            
        if (limit != 0) and (type(limit) == str):
            offset = int(limit) * (int(page) - 1)
            schema_query = """SELECT *
            FROM """ + database + """.INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_NAME='""" + table + """'
            """
            df_columns = connection.execute_query_return_df(schema_query, database)
            # print(df_columns.columns.to_list())

            order_by_col = df_columns['COLUMN_NAME'].iloc[0]
            # print(order_by_col)
            # columns.to_excel('test.xlsx', index = False)

            count_query = """SELECT COUNT(*) AS TOTAL FROM """ + database + '.DBO.' + table
            query = """SELECT ROW_NUMBER() OVER (ORDER BY """ + order_by_col + """) AS INDEX_NUM, """ + columns + '  FROM ' + database + '.DBO.' + table + """\n  ORDER BY 1
            OFFSET """ + str(offset) + """ ROWS
            FETCH NEXT """ + str(limit) +""" ROWS ONLY"""
            

            df = connection.execute_query_return_df(query, database)
            count = connection.execute_query_return_df(count_query, database)
            
            if df.empty:
                return {'NO MORE RECORDS!'}
            else:
                
                total_pages = []
                num_total_pages = math.ceil(int(count['TOTAL'][0])/int(limit))
                # print(num_total_pages)

                # page definition
                for i in range(num_total_pages + 1):

                    if (i == 1) or (i == num_total_pages):
                        total_pages.append(i)
                    elif (num_total_pages > 5) and (abs(int(page) - i) <= 5) and (i != 0):
                        total_pages.append(i)
                    else:
                        pass

                df = df.to_dict(orient ='records')

                return {'total_records': str(count['TOTAL'][0]), 'total_pages': total_pages, 'data' : df}
                # return df

        else:
            return {'ERROR: Query unable to be built!'}

    return read(database, table, limit, columns, page)   

