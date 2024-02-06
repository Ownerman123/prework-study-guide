const topics = ['HTML' , 'CSS', 'Git' , 'JavaScript' ];

   

    for(let x = 0; x < topics.length; x++) {

        if (topics[x] === 'HTML') {
            console.log("Let's study HTML!");
          } else if (topics[x] === 'CSS') {
            console.log("Let's study CSS!");
          } else if (topics[x] === 'Git') {
            console.log("Let's study Git!");
          } else if (topics[x] === 'JavaScript') {
            console.log("Let's study JavaScript!");
          } else {
            console.log('Please try again!');
          }

    }



