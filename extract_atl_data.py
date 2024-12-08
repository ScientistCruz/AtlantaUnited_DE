import pyodbc
import sqlalchemy
import pandas as pd
import os
import pathlib      
import sys
import pandas as pd

dname = os.path.dirname(os.path.abspath(__file__))
utils = os.path.join(dname,'utilities')
dev_test_data = os.path.join(dname,'dev_test_data')

sys.path.insert(0, utils)

import utilities
from utilities.utils import sql_server

# Initial Thoughts:
# https://github.com/American-Soccer-Analysis/asa-shiny-app
# I would like to extract the data from: https://app.americansocceranalysis.com/#!/mls using web scrapping, but it looks like specific queries on the website take some time.
# 

# Second Approach: Use excel extracts to upload data to SQL Server and mimic the upload process.
# Whenever net new data needs to be added to the tables a similar process can be implemented.

# Match Data
# https://app.americansocceranalysis.com/#!/mls/xgoals/games

# Salary Data
# https://app.americansocceranalysis.com/#!/mls/salaries/players

# Player Stats
# https://app.americansocceranalysis.com/#!/mls/goals-added/players


if __name__ == '__main__':
    connection = sql_server(server = 'sql_server' , username = 'sa', port = 1443, password = 'tEST1234')
    print(connection.connection)

    connection.create_database(database='atl_united_db')
    connection.create_database(database='atl_united_db_staging')

    # datetimes
    onlyfiles = [f for f in os.listdir(dev_test_data) if os.path.isfile(os.path.join(dev_test_data, f))]
    print(onlyfiles)
# need to format columns
    
    for file in os.listdir(dev_test_data):
        print(file)
        if '.csv' in file:
            file_df = pd.read_csv(os.path.join(dev_test_data, file))
            # file_df.columns = file_df.columns.str.lower()
            file_df.columns = [x.lower().replace(' ', '_') for x in file_df.columns]
            table_name = file.replace('.csv', '')
            print(table_name)
        else:
            print(file + ' passed.')
            pass

        if table_name == 'american_soccer_analysis_mls_goals-added_players_2024-12-06':
            # file_df = [column for file_df.columns]
            table_name = 'player_stats'
            # there should be player_id info
            merge_column = ['player', 'team']

        elif table_name == 'american_soccer_analysis_mls_xgoals_games_2024-12-06':
            table_name = 'match_data'
            # there should be match_id info
            merge_column = ['date', 'home']

        elif table_name == 'american_soccer_analysis_mls_salaries_players_2024-12-06':
            table_name = 'salaries'

            merge_column = ['player', 'team']    

        else:
            print('Table [merge column] needs to mapped.')

        print(table_name)

        connection.sql_query_bt(file_df,table_name, merge_column, 0)        
