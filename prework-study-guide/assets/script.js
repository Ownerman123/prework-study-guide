const topics = ['HTML' , 'CSS', 'Git' , 'JavaScript' ];

console.log('Here are the topics we learned through Prework:');
ListTopics();

console.log('Which topic should we study first?');
SelectTopic();

function ListTopics() {   

    for(let x = 0; x < topics.length; x++) {

        console.log(topics[x]);
        

    }
}

function SelectTopic() {

    let topic = topics[Math.floor(Math.random() * topics.length)];

if (topic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (topic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (topic === 'Git') {
    console.log("Let's study Git!");
  } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }


}
