const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  profile.name = answer;

  rl.question("What's an activity you like doing? ", (answer) => {
    profile.activity = answer;

    rl.question("What do you listen to while doing that? ", (answer) => {
      profile.music = answer;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        profile.meal = answer;

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profile.food = answer;

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            profile.sport = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              profile.superpower = answer;

              // Generate profile summary
              const summary = `Hi, my name is ${profile.name}! I love ${profile.activity} and listening to ${profile.music}. My favorite meal is ${profile.meal} and my favorite thing to eat for that meal is ${profile.food}. My favorite sport is ${profile.sport} and my superpower is ${profile.superpower}.`;

              // Output profile summary
              console.log(summary);

              // Close the readline interface
              rl.close();
            });
          });
        });
      });
    });
  });
});
