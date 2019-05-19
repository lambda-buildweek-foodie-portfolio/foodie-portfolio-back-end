
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          title: 'Shrimp Cakes',
          mealType: 'dinner',
          ingredients: '1/4 cup cumin seeds, 3 tablespoons whole black peppercorns, 1 tablespoons coriander seeds, 2 tablespoons sugar, 1 1/2 teaspoons sea salt',
          instructions: "1 Make the spice mix: Add cumin seeds, peppercorns, and coriander to a heavy medium skillet. Cook over medium heat, stirring, until fragrant and lightly toasted, about 8 minutes. Let cool a few minutes. Grind spices in a blender or spice grinder (can use a coffee grinder that has been cleaned by grinding raw rice) until finely ground. Transfer to a small bowl, stir in sugar and salt. This makes about half a cup. You'll only need 1 1/2 teaspoons of the spice mix for one shrimp cakes recipe, so store the remainder for future use. 2 Preheat the oven to 375°F. 3 Microwave the sweet potatoes and the garlic: Pierce sweet potatoes all over with a fork. Bake in microwave for about 15 minutes until done. Rub one tablespoon of oil over the unpeeled garlic cloves. Cook in microwave a few minutes, until soft. Let the garlic and sweet potatoes cool enough to handle. Peel the garlic. Cut the sweet potato in half and use a spoon to scoop out the flesh. Combine the cooked sweet potato and garlic in a bowl and mash until smooth. 4 Make the shrimp mixture: Add the shrimp, cilantro, breadcrumbs, jalapeño, onion, and 1 1/2 teaspoons of the spice mix to the bowl with the sweet potatoes. Mix until well blended. Season with salt.",
          image: 'https://www.simplyrecipes.com/wp-content/uploads/2006/03/shrimp-cakes-horiz-a-1600.jpg',
          user_id: 8
        },
        {
          title: 'Salmon Avocado Poke Bowl',
          mealType: 'dinner',
          ingredients: 'Sliced cucumber, Sliced radish, Sliced or cubed avocado, Furikake, Thinly sliced scallion, Red pepper flakes',
          instructions: "Once you have your fish, the rest of the poke bowl comes together really quickly. Just cook some rice, toss the fish with the dressing, and serve! I like to place all the extra toppings on the table so that everyone can help themselves",
          image: 'https://www.simplyrecipes.com/wp-content/uploads/2017/03/2017-04-26-PokeBowls-2-768x1075.jpg',
          user_id: 8
        },
        {
          title: 'Corn Salsa Recipe',
          mealType: 'lunch',
          ingredients: '2 ears fresh corn on the cob, 1/2 cup minced red onion, 1 jalapeño chili pepper, seeded and minced, 1/4 teaspoon ground cumin, 1/3 cup chopped cilantro, including tender stems, 2 teaspoons fresh oregano, chopped (or 1 teaspoon dry), 1 teaspoon kosher salt, 2 Tbsp lime juice',
          instructions: "2 Cut away the kernels: When the corn has cooled to the touch, cut the kernels away from the cobs. The easiest way to do this is to invert a medium sized bowl and place it in a larger bowl. Hold the stem end of the corn cob and place the tip on top of the domed middle bowl. Use a sharp chef's knife to cut down along the sides of the corncob to cut away the kernels.",
          image: 'https://www.simplyrecipes.com/wp-content/uploads/2015/08/corn-salsa-vertical-b-640.jpg',
          user_id: 7
        }
      ]);
    });
};
