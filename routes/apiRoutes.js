/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

/* Magnitude endpoint */
router.route('/magnitude')
  .get(async (req, res) => {
    try {
      console.log('touched /magnitude with GET');
      res.json({ message: 'GET endpoint' });
    } catch (err) {
      console.log(err);
    }
  })

  .put(async (req, res) => {
    try {
      console.log('touched /magnitude with PUT');
      res.json({ message: 'PUT endpoint' });
    } catch (err) {
      console.log(err);
    }
  })

  .post(async (req, res) => {
    try {
      console.log('touched /magnitude with POST');
      res.json({ message: 'POST endpoint' });
    } catch (err) {
      console.log(err);
    }
  })

  .delete(async (req, res) => {
    try {
      console.log('touched /magnitude with DELETE');
      res.json({ message: 'DELETE endpoint' });
    } catch (err) {
      console.log(err);
    }
  });

router.get('/', (req, res) => {
  res.send('Welcome to the West Coast Hurricane API!');
});


router.get('/hurricanes', async (req, res) => {
  try {
    const hurricanes = await db.hurricane.findAll();
    const reply = hurricanes.length > 0 ? { data: hurricanes } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
/* City Endpoint */
//import endpoint1 from '../routes/cityControllers'

router.route('/city')
  .get(async (req, res) => {
    try {
      console.log('touched /city with GET');
      res.json({ message: 'GET endpoint' });
    } catch (err) {
      console.log(err);
    }
  })

  .put(async (req, res) => {
    try {
      console.log('touched /city with PUT');
      res.json({ message: 'PUT endpoint' });
    } catch (err) {
      console.log(err);
    }
  })

  .post(async (req, res) => {
    try {
      console.log('touched /city with POST');
      res.json({ message: 'POST endpoint' });
    } catch (err) {
      console.log(err);
    }
  })

  .delete(async (req, res) => {
    try {
      console.log('touched /city with DELETE');
      res.json({ message: 'DELETE endpoint' });
    } catch (err) {
      console.log(err);
    }

    router.get('/', (req, res) => {
      res.json('You have touched the city endpoint');
    });
  });

/* Date Endpoint */

router.route('/date')
  .get(async (req, res) => {
    try {
      console.log('touched /date with GET');
      res.json( {message: 'GET endpoint'} );
    } catch (err) {
      console.log(err);
    }      
  })

  .put(async (req, res) => {
    try {
      console.log('touched /date with PUT');
      res.json( {message: 'PUT endpoint'} );
    } catch (err) {
      console.log(err);
    }
  })

  .post(async (req, res) => {
    try {
      console.log('touched /date with POST');
      res.json({ message: 'POST endpoint'} );
    } catch (err) {
        console.log(err);
    }
  })

  .delete (async (req, res) => {
    try {
      console.log('touched /date with DELETE');
      res.json({ message: 'DELETE endpoint' });
    } catch(err) {
        console.log(err);
    }
  });

  router.get('/', (req, res) => {
    res.json('You have touched the date endpoint');
  });