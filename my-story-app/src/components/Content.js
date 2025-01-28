import React from "react";
import "./Content.css";
import tortoiseHareImage from "../img/tortoise_hare.jpg";

function Content() {
  return (
    <div>
      <p>The Tortoise and the Hare is a classic fable that tells the story of a 
        swift hare who mocks a slow-moving tortoise for its pace. He often laughed 
        at the slow-moving tortoise, making fun of his pace. The tortoise, tired of the 
        hare's arrogance, challenges him to a race. Amused by the idea, the hare eagerly 
        accepted, confident that he would win easily.</p>
      <p>As the race began, the hare dashed far ahead and, seeing no sign of the tortoise, 
        decided to rest under a tree and take a nap. Meanwhile, the tortoise, slow and steady, 
        continues to make progress, never stopping or giving up. When the hare finally wakes up, 
        he is shocked to find the tortoise nearing the finish line. Despite his speed, the hare 
        is unable to catch up, and the tortoise wins the race.</p>
        
        <img src= {tortoiseHareImage} alt="The Tortoise and the Hare" />
    </div>
  );
}


export default Content;