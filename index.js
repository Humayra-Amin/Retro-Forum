const loadPosts = async() => {
    const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const posts = data;
    displayPosts(posts);
}


const displayPosts = posts => {
    // console.log(posts);
    
//1. id ana
const postContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        console.log(post);
        //2. create a div
        const postCard = document.createElement('div');
        postCard.classList = `card lg:w-96 bg-base-100 shadow-xl mt-10 border-2`;
        
        //3. search innerHtml
        postCard.innerHTML = `
      <figure class="px-10 pt-10">
        <img src="${post.cover_image}" alt="" class="rounded-xl" />
      </figure>
      <div class="card-body gap-4">
        <div class="flex flex-col lg:flex-row justify-start">
          <img src="images/calander.svg" alt="" class="lg:w-auto w-[30px]">
          <p class="lg:mr-[150px] text-base text-[#12132D99] lg:mt-[0px] mt-[-25px]">${post.author.posted_date ? post.author.posted_date : "No Publish Date"}</p>
        </div>
        <p class="text-start font-bold">What will a mars habitat force that impact in our daily life!!!</p>
        <p class="text-start text-[#12132D99]">Yes, you can run unit tests and view the results directly within
          the app. </p>
        <div class="card-actions">
          <img src="${post.profile_image}" alt="" class="lg:ml-[0px] ml-[80px] w-[44px] lg:w-[44px] lg:h-[44px] rounded-full">
          <h3 class="font-bold lg:ml-[0px] ml-[60px]">${post.author.name}</h3>
          <p class="mt-[20px] lg:text-left lg:ml-[-80px] ml-[-166px] text-[#12132D99]">${post.author.designation ? post.author.designation : "Unknown"}</p>
        </div>
      </div> 
      `;

      //4. append child
      postContainer.appendChild(postCard);
      
    })
}

loadPosts();