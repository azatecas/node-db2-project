
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-lot').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-lot').insert([
        {VIN: 'fastandfurious',
         make: 'ferrari', 
         model: 'parrieri', 
         milage:8949
        },
        {VIN: 'ertest',
         make: 'ferari', 
         model: 'parieri', 
         milage:894977
        }
      ]);
    });
};
