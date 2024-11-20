const { mysqlConnection } = require('../config/db');


// Insert metrics

exports.insertMetric = (req, res) => {

   const { metricName, value, date } = req.body;

   const query = 'INSERT INTO metrics (metricName, value, date) VALUES (?, ?, ?)';

   

   mysqlConnection.query(query, [metricName, value, date], (error, results) => {

       if (error) {

           return res.status(500).json({ error: error.message });

       }

       res.status(201).json({ message: 'Metric inserted successfully!', id: results.insertId });

   });

};

// Fetch metrics with filters, pagination, and sorting

exports.getMetrics = (req, res) => {

    const { startDate, endDate, type, page = 1, limit = 10, sort = 'date', order = 'DESC' } = req.query;


    let query = 'SELECT * FROM metrics WHERE 1=1';

    const queryParams = [];


    // Date range filter

    if (startDate) {

        query += ' AND date >= ?';

        queryParams.push(startDate);

    }

    if (endDate) {

        query += ' AND date <= ?';

        queryParams.push(endDate);

    }


    // Data type filter (daily, weekly)

    if (type) {

        query += ' AND DATE_FORMAT(date, "%Y-%m-%d") = DATE_FORMAT(?, "%Y-%m-%d")';

        queryParams.push(type);

    }


    // Sorting

    query += ` ORDER BY ${sort} ${order}`;


    // Pagination

    const offset = (page - 1) * limit;

    query += ' LIMIT ?, ?';

    queryParams.push(offset, parseInt(limit));


    mysqlConnection.query(query, queryParams, (error, results) => {

        if (error) {

            return res.status(500).json({ error: error.message });

        }

        res.json(results);

    });

};

// Aggregate metrics

exports.aggregateMetrics = (req, res) => {

    const query = 'SELECT SUM(value) AS totalSales FROM metrics WHERE date BETWEEN ? AND ?';
 
    const { startDate, endDate } = req.body;
 
 
    mysqlConnection.query(query, [startDate, endDate], (error, results) => {
 
        if (error) {
 
            return res.status(500).json({ error: error.message });
 
        }
 
        res.json({ totalSales: results[0].totalSales });
 
    });
 
 };
 
 