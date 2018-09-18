import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../../components/_layouts/default/DefaultLayout';
import KitchenLayout from '../../components/_layouts/kitchen/KitchenLayout';
import Gallery from '../../components/gallery/Gallery';


const KitchenHomePage = ({ data, location }) => {
  return (
    <DefaultLayout
      location={ location }
    >
      <KitchenLayout>
        <h1>All recipes</h1>
        {/* <h2>Hi there! ({ data.allMarkdownRemark.totalCount })</h2>
        <Link to='/kitchen/recipe/oven-baked-fries'>Oven-baked fries</Link>
        <p>While this is largely a tool for myself to keep track of things I’ve made for future reference, it’s a pleasure to share my notes with you! If you find something you like, please let me know on Instagram <a href='https://instagram.com/teaganskitchen' target='_insta'>@teaganskitchen</a> :)</p>
        
        <h2>What you'll find</h2>
        <p>Starting with what you won’t find: I have allergies to eggs and peanuts, so none of my recipes involve either ingredient. While these allergies make restaurant eating an oft-annoying challenge, I’ve found my own kitchen experiments to be very empowering, and I don’t really miss them.</p>
        <p>While I’m not vegan, vegetarian, dairy-free, gluten-free, alcohol-free, or sugar-free, I am very interested in eating healthy, well-balanced meals, and I enjoy exploring tasty dishes that limit meat, dairy, gluten, alcohol, and sugar for their respective physical and mental benefits. You’ll see what is and isn’t in each recipe marked by allergen icons, and there are filters to limit what you’re looking at as well.</p>
        
        <h2>About my process</h2>
        <p>I am by no means any more than a beginner in the kitchen, so take everything I say with, erm, a grain of salt!</p>
        <p>I enjoyed baking as a child and cooked a little for myself during summer internships in college, but it wasn’t until I embarked on an elimination diet in the summer of 2016 that I began to really cook with any healthful intention. And it wasn’t until the conclusion of the elimination diet a year later in the summer of 2017 that I really had the freedom an interest to begin viewing meal preparation as a means of aesthetic expression or as a way to entertain friends.</p>
        <p>I grew up a very picky eater and always resisted trying new things. Perhaps ironically, it took eating an even more limited list of foods for months to encourage me to try each new food I was allowed to add, even if I would’ve passed on it before. And I’ve decided to continue that trend even though I can eat most things now.</p>
        <p>While my platings certainly betray that I have very little life exposure to fancy, expensive, complex, or internationally-inspired meals, my intrigue has been sparked to explore more beautiful, better-portioned compositions with an ever-wider variety of foods, spices, and sauces.</p>

        <h2>An admission</h2>
        <p>I’m really bad at timing. When I do repeats of meals, I can generally get things to finish up around the same time, but that’s definitely not the case most nights. It’s kinda a bummer for other people I might be serving (oops), but luckily I eat on my own more often than not!</p>
        <p>Then again, that’s not really the point of cooking for me. For me, it’s all about hanging out with the food, taking my time, having fun with it, and watching others enjoy what I’ve made. It’s a great way to be creative, to wind down from the day, and I often find it rather meditative. My general attitude is usually that I’ll eat whenever it’s ready.</p>
        <p>This may be important to you because for a large part, unless I’ve made the recipe a bunch, the time estimates are largely guesses. Sorry about that.</p> */}
      </KitchenLayout>
      <Gallery
        recipes={ data.allMarkdownRemark.edges }
      />
    </DefaultLayout>
  );
}


export const kitchenHomeQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___title], order: ASC
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            path
            photo
            title
            time {
              timeAmount
              timeUnits
            }
          }
        }
      }
    }
  }
`;

export default KitchenHomePage;
