import React, { useState, useEffect } from "react";

const players = [
  {
    "name": "Brad Guzan",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/kdwb35iqv4yiw5unyqtr.png",
    "position": "Goalkeeper",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 37,
      "goals": 0,
      "assists": 0,
      "clean_sheets": 6,
      "saves": 84,
      "save_percentage": 71.8,
      "goals_against_average": 1.34
    }
  },
  {
    "name": "Ronald Hernández",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/yvapq2tdnvcecryxajtd.png",
    "position": "Defender",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 25,
      "goals": 0,
      "assists": 1,
      "yellow_cards": 3,
      "red_cards": 0
    }
  },
  {
    "name": "Derrick Williams",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/i8etdvnj6ycsmhmbxlu2.png",
    "position": "Defender",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 32,
      "goals": 1,
      "assists": 0,
      "yellow_cards": 5,
      "red_cards": 0
    }
  },
  {
    "name": "Luis Abram",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/ainovyytnptbmkm6n9a9.png",
    "position": "Defender",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 28,
      "goals": 0,
      "assists": 0,
      "yellow_cards": 4,
      "red_cards": 0
    }
  },
  {
    "name": "Stian Gregersen",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/u8kxqfvmtydzplchezur.png",
    "position": "Defender",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 27,
      "goals": 3,
      "assists": 0,
      "yellow_cards": 6,
      "red_cards": 1
    }
  },
  {
    "name": "Bartosz Slisz",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/wwngh2jgp3stq4cnwurd.png",
    "position": "Midfielder",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 33,
      "goals": 2,
      "assists": 3,
      "yellow_cards": 7,
      "red_cards": 0
    }
  },
  {
    "name": "Tristan Muyumba",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/p3lxbvtsfwslrgmyfqmy.png",
    "position": "Midfielder",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 30,
      "goals": 1,
      "assists": 4,
      "yellow_cards": 5,
      "red_cards": 0
    }
  },
  {
    "name": "Saba Lobjanidze",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/scsaenefuialxfrunezo.png",
    "position": "Midfielder",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 35,
      "goals": 10,
      "assists": 5,
      "yellow_cards": 2,
      "red_cards": 0
    }
  },
  {
    "name": "Brooks Lennon",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/llngcmqgtgqverbon7au.png",
    "position": "Defender",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 35,
      "goals": 1,
      "assists": 6,
      "yellow_cards": 3,
      "red_cards": 0
    }
  },
  {
    "name": "Dax McCarty",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/wxco09tfehkrv955of7j.png",
    "position": "Midfielder",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 20,
      "goals": 0,
      "assists": 1,
      "yellow_cards": 4,
      "red_cards": 0
    }
  },
  {
    "name": "Xande Silva",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/zocgkh18nlxvapvojmdm.png",
    "position": "Forward/Midfielder",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 27,
      "goals": 3,
      "assists": 2,
      "yellow_cards": 2,
      "red_cards": 0
    }
  },
  {
    "name": "Pedro Amador",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/im1mqdzi1ldsdqcxja8l.png",
    "position": "Defender",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 15,
      "goals": 0,
      "assists": 0,
      "yellow_cards": 2,
      "red_cards": 0
    }
  },
  {
    "name": "Daniel Ríos",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/yvnohyhlemwjyfmlu967.png",
    "position": "Forward",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 32,
      "goals": 7,
      "assists": 3,
      "yellow_cards": 3,
      "red_cards": 0
    }
  },
  {
    "name": "Edwin Mosquera",
    "image": "https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-atl/g7xmlethfcgje3z7joal.png",
    "position": "Forward",
    "athlete_staff": "athlete",
    "current_season_stats": {
      "games_played": 22,
      "goals": 1,
      "assists": 2,
      "yellow_cards": 2,
      "red_cards": 0
    }},
    
      {
        "name": "Rob Valentino",
        "image": "https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls-atl/kickgl71a0u4h5wzdlol.jpg",
        "position": "Interim Head Coach",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Carl Robinson",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Assistant Coach",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Liam Curran",
        "image": "https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls-atl/njglfxauubrwfjgdmhvt.jpg",
        "position": "Goalkeeper Coach",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Matt Lawrey",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Assistant Coach",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "David Tenney",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Director, High Performance",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Andrew Guard",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Director, Sports Performance",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Sean Cropper",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Head Athletic Trainer",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Maggi Campanaro",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Assistant Athletic Trainer",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Jack Kimber",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Fitness Coach - First Team",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Ricardo Oliveira",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Fitness Coach",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Karlie Paschall",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Fitness Coach",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Tyler Raborn",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Fitness Coach",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Brianna Karweick",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Athletic Training Assistant",
        "athlete_staff": "staff",
        "current_season_stats": {}
      },
      {
        "name": "Jordan Day",
        "image": "https://www.atlutd.com/club/coaching-staff",
        "position": "Academy Fitness Coach",
        "athlete_staff": "staff",
        "current_season_stats": {}
      }
    

  

]



const Team = () => {
  const [filter, setFilter] = useState("athlete");
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Update filtered players whenever the filter changes
  useEffect(() => {
    const updatedFilteredPlayers = players.filter(
      (player) => player.athlete_staff === filter
    );
    setFilteredPlayers(updatedFilteredPlayers);

    // Set the default selected player to the first player in the updated list
    setSelectedPlayer(updatedFilteredPlayers[0] || null);
  }, [filter]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const tablefilteredPlayers = players.filter(player => player.athlete_staff === "athlete");

  // Safely extract headers from the filtered players
  const tableHeaders = Array.from(
    new Set(
      filteredPlayers
        .filter(player => selectedPlayer.current_season_stats) // Ensure stats are present
        .flatMap(player => Object.keys(selectedPlayer.current_season_stats))
    )
  );


  
  return (
    <div>
      <div className={`p-8 transition-all duration-300 ${
        isSidebarOpen ? "mr-64" : "ml-auto"
        // isSidebarOpen ? "" : ""

      }`}>

      {/* Athlete/Staff Filter */}
      <div className="mb-6 max-w-lg mx-auto">
        <label htmlFor="filter-select" className="block mb-2 text-lg font-medium text-center">
          Filter by:
        </label>
        <select
          id="filter-select"
          className="border p-2 rounded-md w-full max-w-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="athlete">Athletes</option>
          <option value="staff">Staff</option>
        </select>
      </div>

      {/* Dropdown for Filtered Players */}
      <div className="mb-6 max-w-lg mx-auto">
        <label htmlFor="player-select" className="block mb-2 text-lg font-medium text-center">
          Select a Player:
        </label>
        <select
          id="player-select"
          className="border p-2 rounded-md w-full max-w-md"
          value={selectedPlayer?.name || ""}
          onChange={(e) =>
            setSelectedPlayer(
              filteredPlayers.find((p) => p.name === e.target.value)
            )
          }
        >
          {filteredPlayers.map((player) => (
            <option key={player.name} value={player.name}>
              {player.name} - {player.position}
            </option>
          ))}
        </select>
      </div>

      {/* Player/Staff Image and Details */}
      {selectedPlayer && (
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">{selectedPlayer.name}</h2>
          <p className="text-lg text-gray-600 mb-4">{selectedPlayer.position}</p>
          <img
            src={selectedPlayer.image}
            alt={selectedPlayer.name}
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
        </div>
      )}



 {/* Player Statistics Table */}
 {selectedPlayer && selectedPlayer.current_season_stats && (
        <div className="mt-8 w-full max-w-2xl mx-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>

              <tr>
              {tableHeaders.map(header => (
              <th key={header} className="border border-gray-300 px-4 py-2 capitalize">
                {header.replace(/_/g, ' ')}
              </th>
            ))}
              </tr>
            </thead>
            <tbody>

                {tableHeaders.map(header => (
                  <td key={header} className="border border-gray-300 px-4 py-2">
                    {selectedPlayer.current_season_stats?.[header] ?? '-'}
                  </td>
                ))}

            </tbody>
          </table>
        </div>
      )}        
      </div>

    </div>
  );
};

export default Team;