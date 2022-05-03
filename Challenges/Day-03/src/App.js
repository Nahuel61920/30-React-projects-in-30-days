import { useEffect } from "react";
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      delay: 700,
      duration: 1000,
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Animations</h1>
        <section className='box' data-aos="fade-up">
          <h2>Fade-up</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="fade-down">
          <h2>Fade-down</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="fade-right">
          <h2>Fade-right</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="fade-left">
          <h2>Fade-left</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="fade-up-right">
          <h2>Fade-up-right</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="fade-up-left">
          <h2>Fade-up-left</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="fade-down-right">
          <h2>Fade-down-right</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="fade-down-left">
          <h2>Fade-down-left</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="flip-left">
          <h2>Flip-left</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="flip-right">
          <h2>Flip-right</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="flip-up">
          <h2>Flip-up</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="flip-down">
          <h2>Flip-down</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="zoom-in">
          <h2>Zoom-in</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="zoom-out">
          <h2>Zoom-out</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
        <section className='box' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <h2>Flip-left-aos-easing</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos dolor ipsa saepe, porro, ad molestiae quaerat quis ea sint beatae rerum unde delectus illo asperiores non a rem illum, incidunt iste maxime voluptatem odio repellat voluptate! Sunt, aliquam, architecto aliquid at enim quos doloribus ex laudantium repellendus distinctio expedita repellat ab tenetur voluptate nemo cum minima iusto necessitatibus sed ducimus error omnis excepturi. Modi quibusdam non perferendis eaque debitis in, ab hic obcaecati dicta consequuntur voluptatibus maxime harum nihil quidem. Similique nobis totam cum, dolor illum quasi? Praesentium debitis minus dolores dicta vero possimus modi soluta deleniti corrupti blanditiis voluptatum nihil amet provident facere beatae, maxime consectetur. Saepe provident fugiat consequatur excepturi perferendis odio, possimus suscipit reprehenderit. Cupiditate numquam quam repellendus soluta quibusdam iusto optio reiciendis!
          </p>
        </section>
      </header>
    </div >
  );
}

export default App;
