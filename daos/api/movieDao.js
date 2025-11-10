// Step 10 connect to the database
const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const movieDao = {
    table: 'movie',
    // Step 24 write query methods specifically for the movie table
    findAll: (res, table)=> {

        const sql = `SELECT m.movie_id, m.title, m.runtime, m.nationality, m.yr_released, m.budget, m.gross,
m.production_id, m.showing, m.poster,
    
GROUP_CONCAT(g.genre SEPARATOR ', ') AS genre,
    CASE
        WHEN m.rating IS NULL THEN ''
        ELSE m.rating
        END AS rating
    FROM movie AS m
    LEFT OUTER JOIN production AS p USING (production_id)
    LEFT JOIN movie_to_genre AS mtg ON m.movie_id = mtg.movie_id
    LEFT JOIN genre AS g ON mtg.genre_id = g.genre_id
GROUP BY m.movie_id,
    m.title,
    m.runtime,
    m.nationality,
    m.yr_released,
    m.budget,
    m.gross,
    m.production_id,
    m.showing,
    m.poster,
    m.rating
ORDER BY m.movie_id;`;

         con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows,)
            }
        )
    },

    findMoviesByRatings: (res, table)=> {
        con.execute(
            `SELECT * FROM ${table} WHERE rating IS NOT NULL`,
            (error, rows)=> {
                queryAction(res, error, rows)
            }
        )
    }
}

module.exports = movieDao
