module.exports = async function (req,res) {
  var _ = require("underscore")
  try {
    const blogs = await Blog.find({isReviewed: true, isArchived: false})
    .sort('createdAt DESC')
    .populate('writer')
    .paginate(0,25)
    const sanitizedBlogs = JSON.parse(JSON.stringify(blogs))
    //compute pctg of blogs here and pass it to homepage
    const isMore = sanitizedBlogs.length == 25 ? true : false

    try {
      sails.config.globals.scores = {
        status: 200,
        time: "2022-06-21T00:42:04.039Z",
        games: 10,
        skip: 0,
        results: [
          {
            schedule: {
              date: "2022-06-20T17:10:00.000Z",
              tbaTime: false,
            },
            summary: "Miami Marlins @ New York Mets",
            details: {
              league: "MLB",
              seasonType: "regular",
              season: 2022,
              conferenceGame: true,
              divisionGame: true,
            },
            status: "final",
            teams: {
              away: {
                team: "Miami Marlins",
                location: "Miami",
                mascot: "Marlins",
                abbreviation: "MIA",
                conference: "National League",
                division: "East",
              },
              home: {
                team: "New York Mets",
                location: "New York",
                mascot: "Mets",
                abbreviation: "NYM",
                conference: "National League",
                division: "East",
              },
            },
            lastUpdated: "2022-06-20T20:36:28.728Z",
            gameId: 280616,
            venue: {
              name: "Citi Field",
              city: "Queens",
              state: "NY",
              neutralSite: false,
            },
            odds: [
              {
                spread: {
                  open: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -155,
                    homeOdds: 135,
                  },
                  current: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -140,
                    homeOdds: 120,
                  },
                },
                moneyline: {
                  open: {
                    awayOdds: 131,
                    homeOdds: -152,
                  },
                  current: {
                    awayOdds: 145,
                    homeOdds: -166,
                  },
                },
                total: {
                  open: {
                    total: 8.5,
                    overOdds: -100,
                    underOdds: -120,
                  },
                  current: {
                    total: 8.5,
                    overOdds: -115,
                    underOdds: -110,
                  },
                },
                openDate: "2022-06-19T20:16:23.828Z",
                lastUpdated: "2022-06-20T17:36:40.773Z",
              },
            ],
            scoreboard: {
              score: {
                away: 0,
                home: 6,
                awayPeriods: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                ],
                homePeriods: [
                  1,
                  0,
                  0,
                  2,
                  1,
                  0,
                  0,
                  2,
                ],
              },
              currentPeriod: 9,
              periodTimeRemaining: null,
            },
          },
          {
            schedule: {
              date: "2022-06-20T23:05:00.000Z",
              tbaTime: false,
            },
            summary: "Chicago Cubs @ Pittsburgh Pirates",
            details: {
              league: "MLB",
              seasonType: "regular",
              season: 2022,
              conferenceGame: true,
              divisionGame: true,
            },
            status: "in progress",
            teams: {
              away: {
                team: "Chicago Cubs",
                location: "Chicago",
                mascot: "Cubs",
                abbreviation: "CHC",
                conference: "National League",
                division: "Central",
              },
              home: {
                team: "Pittsburgh Pirates",
                location: "Pittsburgh",
                mascot: "Pirates",
                abbreviation: "PIT",
                conference: "National League",
                division: "Central",
              },
            },
            lastUpdated: "2022-06-21T00:41:15.299Z",
            gameId: 280621,
            venue: {
              name: "PNC Park",
              city: "Pittsburgh",
              state: "PA",
              neutralSite: false,
            },
            odds: [
              {
                spread: {
                  open: {
                    away: -1.5,
                    home: 1.5,
                    awayOdds: 150,
                    homeOdds: -170,
                  },
                  current: {
                    away: -1.5,
                    home: 1.5,
                    awayOdds: 155,
                    homeOdds: -175,
                  },
                },
                moneyline: {
                  open: {
                    awayOdds: -109,
                    homeOdds: -109,
                  },
                  current: {
                    awayOdds: -100,
                    homeOdds: -115,
                  },
                },
                total: {
                  open: {
                    total: 8.5,
                    overOdds: -100,
                    underOdds: -120,
                  },
                  current: {
                    total: 8,
                    overOdds: -120,
                    underOdds: -105,
                  },
                },
                openDate: "2022-06-19T20:16:23.874Z",
                lastUpdated: "2022-06-20T23:33:54.887Z",
              },
            ],
            scoreboard: {
              score: {
                away: 0,
                home: 7,
                awayPeriods: [
                  0,
                  0,
                  0,
                  0,
                ],
                homePeriods: [
                  0,
                  3,
                  4,
                  0,
                ],
              },
              currentPeriod: 4,
              periodTimeRemaining: null,
            },
          },
          {
            schedule: {
              date: "2022-06-20T23:10:00.000Z",
              tbaTime: false,
            },
            summary: "Detroit Tigers @ Boston Red Sox",
            details: {
              league: "MLB",
              seasonType: "regular",
              season: 2022,
              conferenceGame: true,
              divisionGame: false,
            },
            status: "in progress",
            teams: {
              away: {
                team: "Detroit Tigers",
                location: "Detroit",
                mascot: "Tigers",
                abbreviation: "DET",
                conference: "American League",
                division: "Central",
              },
              home: {
                team: "Boston Red Sox",
                location: "Boston",
                mascot: "Red Sox",
                abbreviation: "BOS",
                conference: "American League",
                division: "East",
              },
            },
            lastUpdated: "2022-06-21T00:41:15.393Z",
            gameId: 280624,
            venue: {
              name: "Fenway Park",
              city: "Boston",
              state: "MA",
              neutralSite: false,
            },
            odds: [
              {
                spread: {
                  open: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -135,
                    homeOdds: 115,
                  },
                  current: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -130,
                    homeOdds: 110,
                  },
                },
                moneyline: {
                  open: {
                    awayOdds: 154,
                    homeOdds: -176,
                  },
                  current: {
                    awayOdds: 160,
                    homeOdds: -182,
                  },
                },
                total: {
                  open: {
                    total: 9.5,
                    overOdds: -110,
                    underOdds: -110,
                  },
                  current: {
                    total: 9.5,
                    overOdds: -110,
                    underOdds: -115,
                  },
                },
                openDate: "2022-06-19T20:16:23.958Z",
                lastUpdated: "2022-06-20T23:33:54.971Z",
              },
            ],
            scoreboard: {
              score: {
                away: 1,
                home: 3,
                awayPeriods: [
                  0,
                  1,
                  0,
                  0,
                  0,
                ],
                homePeriods: [
                  1,
                  0,
                  1,
                  1,
                ],
              },
              currentPeriod: 5,
              periodTimeRemaining: null,
            },
          },
          {
            schedule: {
              date: "2022-06-20T23:10:00.000Z",
              tbaTime: false,
            },
            summary: "New York Yankees @ Tampa Bay Rays",
            details: {
              league: "MLB",
              seasonType: "regular",
              season: 2022,
              conferenceGame: true,
              divisionGame: true,
            },
            status: "in progress",
            teams: {
              away: {
                team: "New York Yankees",
                location: "New York",
                mascot: "Yankees",
                abbreviation: "NYY",
                conference: "American League",
                division: "East",
              },
              home: {
                team: "Tampa Bay Rays",
                location: "Tampa Bay",
                mascot: "Rays",
                abbreviation: "TB",
                conference: "American League",
                division: "East",
              },
            },
            lastUpdated: "2022-06-21T00:41:15.348Z",
            gameId: 280628,
            venue: {
              name: "Tropicana Field",
              city: "St. Petersburg",
              state: "FL",
              neutralSite: false,
            },
            odds: [
              {
                spread: {
                  open: {
                    away: -1.5,
                    home: 1.5,
                    awayOdds: 145,
                    homeOdds: -165,
                  },
                  current: {
                    away: -1.5,
                    home: 1.5,
                    awayOdds: 135,
                    homeOdds: -160,
                  },
                },
                moneyline: {
                  open: {
                    awayOdds: -127,
                    homeOdds: 110,
                  },
                  current: {
                    awayOdds: -141,
                    homeOdds: 125,
                  },
                },
                total: {
                  open: {
                    total: 6.5,
                    overOdds: -110,
                    underOdds: -110,
                  },
                  current: {
                    total: 6.5,
                    overOdds: -100,
                    underOdds: -120,
                  },
                },
                openDate: "2022-06-19T20:16:23.909Z",
                lastUpdated: "2022-06-20T23:33:54.930Z",
              },
            ],
            scoreboard: {
              score: {
                away: 1,
                home: 0,
                awayPeriods: [
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                ],
                homePeriods: [
                  0,
                  0,
                  0,
                  0,
                  0,
                ],
              },
              currentPeriod: 6,
              periodTimeRemaining: null,
            },
          },
          {
            schedule: {
              date: "2022-06-20T23:20:00.000Z",
              tbaTime: false,
            },
            summary: "San Francisco Giants @ Atlanta Braves",
            details: {
              league: "MLB",
              seasonType: "regular",
              season: 2022,
              conferenceGame: true,
              divisionGame: false,
            },
            status: "in progress",
            teams: {
              away: {
                team: "San Francisco Giants",
                location: "San Francisco",
                mascot: "Giants",
                abbreviation: "SF",
                conference: "National League",
                division: "West",
              },
              home: {
                team: "Atlanta Braves",
                location: "Atlanta",
                mascot: "Braves",
                abbreviation: "ATL",
                conference: "National League",
                division: "East",
              },
            },
            lastUpdated: "2022-06-21T00:41:15.424Z",
            gameId: 280632,
            venue: {
              name: "Truist Park",
              city: "Atlanta",
              state: "GA",
              neutralSite: false,
            },
            odds: [
              {
                spread: {
                  open: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -160,
                    homeOdds: 140,
                  },
                  current: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -170,
                    homeOdds: 150,
                  },
                },
                moneyline: {
                  open: {
                    awayOdds: 126,
                    homeOdds: -144,
                  },
                  current: {
                    awayOdds: 135,
                    homeOdds: -155,
                  },
                },
                total: {
                  open: {
                    total: 8,
                    overOdds: -110,
                    underOdds: -110,
                  },
                  current: {
                    total: 8,
                    overOdds: -110,
                    underOdds: -110,
                  },
                },
                openDate: "2022-06-19T20:16:24.003Z",
                lastUpdated: "2022-06-20T23:44:35.676Z",
              },
            ],
            scoreboard: {
              score: {
                away: 0,
                home: 1,
                awayPeriods: [
                  0,
                  0,
                  0,
                  0,
                  0,
                ],
                homePeriods: [
                  0,
                  1,
                  0,
                  0,
                  0,
                ],
              },
              currentPeriod: 5,
              periodTimeRemaining: null,
            },
          },
          {
            schedule: {
              date: "2022-06-21T00:10:00.000Z",
              tbaTime: false,
            },
            summary: "Toronto Blue Jays @ Chicago White Sox",
            details: {
              league: "MLB",
              seasonType: "regular",
              season: 2022,
              conferenceGame: true,
              divisionGame: false,
            },
            status: "in progress",
            teams: {
              away: {
                team: "Toronto Blue Jays",
                location: "Toronto",
                mascot: "Blue Jays",
                abbreviation: "TOR",
                conference: "American League",
                division: "East",
              },
              home: {
                team: "Chicago White Sox",
                location: "Chicago",
                mascot: "White Sox",
                abbreviation: "CWS",
                conference: "American League",
                division: "Central",
              },
            },
            lastUpdated: "2022-06-21T00:41:15.457Z",
            gameId: 280614,
            venue: {
              name: "Guaranteed Rate Field",
              city: "Chicago",
              state: "IL",
              neutralSite: false,
            },
            odds: [
              {
                spread: {
                  open: {
                    away: -1.5,
                    home: 1.5,
                    awayOdds: 140,
                    homeOdds: -160,
                  },
                  current: {
                    away: -1.5,
                    home: 1.5,
                    awayOdds: 130,
                    homeOdds: -150,
                  },
                },
                moneyline: {
                  open: {
                    awayOdds: -121,
                    homeOdds: 104,
                  },
                  current: {
                    awayOdds: -124,
                    homeOdds: 108,
                  },
                },
                total: {
                  open: {
                    total: 9,
                    overOdds: -100,
                    underOdds: -120,
                  },
                  current: {
                    total: 9,
                    overOdds: -110,
                    underOdds: -110,
                  },
                },
                openDate: "2022-06-19T20:16:24.030Z",
                lastUpdated: "2022-06-21T00:34:44.069Z",
              },
            ],
            scoreboard: {
              score: {
                away: 2,
                home: 1,
                awayPeriods: [
                  0,
                  2,
                ],
                homePeriods: [
                  1,
                ],
              },
              currentPeriod: 2,
              periodTimeRemaining: null,
            },
          },
          {
            schedule: {
              date: "2022-06-21T00:10:00.000Z",
              tbaTime: false,
            },
            summary: "St. Louis Cardinals @ Milwaukee Brewers",
            details: {
              league: "MLB",
              seasonType: "regular",
              season: 2022,
              conferenceGame: true,
              divisionGame: true,
            },
            status: "in progress",
            teams: {
              away: {
                team: "St. Louis Cardinals",
                location: "St. Louis",
                mascot: "Cardinals",
                abbreviation: "STL",
                conference: "National League",
                division: "Central",
              },
              home: {
                team: "Milwaukee Brewers",
                location: "Milwaukee",
                mascot: "Brewers",
                abbreviation: "MIL",
                conference: "National League",
                division: "Central",
              },
            },
            lastUpdated: "2022-06-21T00:41:15.498Z",
            gameId: 280634,
            venue: {
              name: "American Family Field",
              city: "Milwaukee",
              state: "WI",
              neutralSite: false,
            },
            odds: [
              {
                spread: {
                  open: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -170,
                    homeOdds: 150,
                  },
                  current: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -155,
                    homeOdds: 135,
                  },
                },
                moneyline: {
                  open: {
                    awayOdds: 131,
                    homeOdds: -149,
                  },
                  current: {
                    awayOdds: 147,
                    homeOdds: -167,
                  },
                },
                total: {
                  open: {
                    total: 7,
                    overOdds: -120,
                    underOdds: 100,
                  },
                  current: {
                    total: 7.5,
                    overOdds: -120,
                    underOdds: -105,
                  },
                },
                openDate: "2022-06-19T20:16:24.074Z",
                lastUpdated: "2022-06-21T00:34:44.110Z",
              },
            ],
            scoreboard: {
              score: {
                away: 0,
                home: 0,
                awayPeriods: [
                  0,
                  0,
                ],
                homePeriods: [
                  0,
                ],
              },
              currentPeriod: 2,
              periodTimeRemaining: null,
            },
          },
          {
            schedule: {
              date: "2022-06-21T01:38:00.000Z",
              tbaTime: false,
            },
            summary: "Kansas City Royals @ Los Angeles Angels",
            details: {
              league: "MLB",
              seasonType: "regular",
              season: 2022,
              conferenceGame: true,
              divisionGame: false,
            },
            status: "scheduled",
            teams: {
              away: {
                team: "Kansas City Royals",
                location: "Kansas City",
                mascot: "Royals",
                abbreviation: "KC",
                conference: "American League",
                division: "Central",
              },
              home: {
                team: "Los Angeles Angels",
                location: "Los Angeles",
                mascot: "Angels",
                abbreviation: "LAA",
                conference: "American League",
                division: "West",
              },
            },
            lastUpdated: "2022-06-21T00:41:15.526Z",
            gameId: 280638,
            venue: {
              name: "Angel Stadium",
              city: "Anaheim",
              state: "CA",
              neutralSite: false,
            },
            odds: [
              {
                spread: {
                  open: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -145,
                    homeOdds: 125,
                  },
                  current: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -120,
                    homeOdds: 100,
                  },
                },
                moneyline: {
                  open: {
                    awayOdds: 152,
                    homeOdds: -177,
                  },
                  current: {
                    awayOdds: 167,
                    homeOdds: -189,
                  },
                },
                total: {
                  open: {
                    total: 8.5,
                    overOdds: -120,
                    underOdds: -100,
                  },
                  current: {
                    total: 9,
                    overOdds: -110,
                    underOdds: -110,
                  },
                },
                openDate: "2022-06-19T20:16:24.101Z",
                lastUpdated: "2022-06-21T00:41:43.026Z",
              },
            ],
          },
          {
            schedule: {
              date: "2022-06-21T01:40:00.000Z",
              tbaTime: false,
            },
            summary: "Arizona Diamondbacks @ San Diego Padres",
            details: {
              league: "MLB",
              seasonType: "regular",
              season: 2022,
              conferenceGame: true,
              divisionGame: true,
            },
            status: "scheduled",
            teams: {
              away: {
                team: "Arizona Diamondbacks",
                location: "Arizona",
                mascot: "Diamondbacks",
                abbreviation: "ARI",
                conference: "National League",
                division: "West",
              },
              home: {
                team: "San Diego Padres",
                location: "San Diego",
                mascot: "Padres",
                abbreviation: "SD",
                conference: "National League",
                division: "West",
              },
            },
            lastUpdated: "2022-06-21T00:41:15.559Z",
            gameId: 280641,
            venue: {
              name: "Petco Park",
              city: "San Diego",
              state: "CA",
              neutralSite: false,
            },
            odds: [
              {
                spread: {
                  open: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -135,
                    homeOdds: 115,
                  },
                  current: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -150,
                    homeOdds: 130,
                  },
                },
                moneyline: {
                  open: {
                    awayOdds: 173,
                    homeOdds: -200,
                  },
                  current: {
                    awayOdds: 150,
                    homeOdds: -171,
                  },
                },
                total: {
                  open: {
                    total: 7.5,
                    overOdds: -110,
                    underOdds: -110,
                  },
                  current: {
                    total: 7,
                    overOdds: -120,
                    underOdds: -100,
                  },
                },
                openDate: "2022-06-19T20:16:24.137Z",
                lastUpdated: "2022-06-21T00:41:43.084Z",
              },
            ],
          },
          {
            schedule: {
              date: "2022-06-21T00:00:00.000Z",
              tbaTime: false,
            },
            summary: "Colorado Avalanche @ Tampa Bay Lightning",
            details: {
              league: "NHL",
              seasonType: "postseason",
              season: 2021,
              conferenceGame: false,
              divisionGame: false,
            },
            status: "in progress",
            teams: {
              away: {
                team: "Colorado Avalanche",
                location: "Colorado",
                mascot: "Avalanche",
                abbreviation: "COL",
                conference: "Western",
                division: "Central",
              },
              home: {
                team: "Tampa Bay Lightning",
                location: "Tampa Bay",
                mascot: "Lightning",
                abbreviation: "TBL",
                conference: "Eastern",
                division: "Atlantic",
              },
            },
            lastUpdated: "2022-06-21T00:41:19.923Z",
            gameId: 285675,
            venue: {
              name: "Amalie Arena",
              city: "Tampa",
              state: "FL",
              neutralSite: false,
            },
            odds: [
              {
                spread: {
                  open: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -270,
                    homeOdds: 220,
                  },
                  current: {
                    away: 1.5,
                    home: -1.5,
                    awayOdds: -250,
                    homeOdds: 210,
                  },
                },
                moneyline: {
                  open: {
                    awayOdds: -110,
                    homeOdds: -110,
                  },
                  current: {
                    awayOdds: -101,
                    homeOdds: -119,
                  },
                },
                total: {
                  open: {
                    total: 6,
                    overOdds: -100,
                    underOdds: -120,
                  },
                  current: {
                    total: 6,
                    overOdds: 105,
                    underOdds: -125,
                  },
                },
                openDate: "2022-06-19T14:45:05.841Z",
                lastUpdated: "2022-06-21T00:24:54.613Z",
              },
            ],
            scoreboard: {
              score: {
                away: 0,
                home: 0,
                awayPeriods: [
                  0,
                ],
                homePeriods: [
                  0,
                ],
              },
              currentPeriod: 1,
              periodTimeRemaining: "13:00",
            },
          },
        ],
      }
    } catch (error) {
      console.log(error)
    }
    
    return res.view("pages/homepage", {
      blogs: sanitizedBlogs,
      pageNum: 0,
      isMore: isMore,
      summary: "summary",
      ogTitle: "This is All Things Great",
      ogDesc: "All Things Great is a multimedia entertainment company based in Montana. Bring on the challenges and no laws apply",
      ogImage: "https://all-things-great.s3.us-west-2.amazonaws.com/AllThingsGreat.png",
      ogSite: "@allthingsgrea_",
      ogUrl: "https://allthingsgreat.com",
      ogCreator: "@allthingsgrea_",
    });
  } catch(err) {
    res.serverError(error.toString())
  }
};