const loadPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const posts = data;
    displayPosts(posts);
}


const displayPosts = posts => {
    // console.log(posts);

    const postContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        console.log(post);
        const postCard = document.createElement('div');
        postCard.classList = `card lg:w-96 bg-base-100 shadow-xl mt-10 border-2`;

        postCard.innerHTML = `
      <figure class="px-10 pt-10">
        <img src="${post.cover_image}" alt="" class="rounded-xl" />
      </figure>
      <div class="card-body gap-4">
        <div class="flex flex-col lg:flex-row justify-start">
          <img src="images/calander.svg" alt="" class="lg:w-auto w-[30px]">
          <p class="lg:mr-[150px] text-base text-[#12132D99] lg:mt-[0px] mt-[-25px]">${post.author.posted_date ? post.author.posted_date : "No Publish Date"}</p>
        </div>
        <p class="text-start font-bold">${post.title}</p>
        <p class="text-start text-[#12132D99]">${post.description}</p>
        <div class="card-actions">
          <img src="${post.profile_image}" alt="" class="lg:ml-[0px] ml-[80px] w-[44px] lg:w-[44px] lg:h-[44px] rounded-full">
          <h3 class="font-bold lg:ml-[0px] ml-[60px]">${post.author.name}</h3>
          <p class="mt-[20px] lg:text-left lg:ml-[-80px] ml-[-166px] text-[#12132D99]">${post.author.designation ? post.author.designation : "Unknown"}</p>
        </div>
      </div> 
      `;
        postContainer.appendChild(postCard);

    })
}

loadPosts();


const loadDiscusses = async (searchText) => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const discusses = data.posts;
    // console.log(discusses);
    displayDiscusses(discusses);
}

const loadAllPost = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const discusses = data.posts;
    // console.log(discusses);
    displayDiscusses(discusses);
}

const displayDiscusses = discusses => {
    // console.log(discusses);

    const discussContainer = document.getElementById('discuss-container');
    discussContainer.textContent = '';

    discusses.forEach(discuss => {
        console.log(discuss);
        const discussCard = document.createElement('div');
        discussCard.classList = `card lg:w-[700px] bg-base-100 bg-[#797dfc1a] border-2 mb-6`;

        discussCard.innerHTML = `
        <div class="stat-figure text-secondary lg:mr-[600px] lg:mt-6">
              <div class="avatar online">
                <div class="w-16 rounded-xl">
                  <img src="${discuss.image}" class="border-2 bg-white" />
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="flex flex-col lg:flex-row gap-20 lg:mt-[-100px]">
                <h2 class="lg:ml-20 font-inter">${discuss.category}</h2>
                <h2 class="font-inter lg:mt-0 mt-[-50px]">${discuss.author.name}</h2>
              </div>
              <p class="lg:text-left lg:ml-20 font-mulish font-bold">${discuss.title}</p>
              <p class="lg:text-left lg:ml-20 font-mulish">${discuss.description}</p>
              <hr class="border-dotted border lg:w-[570px] lg:ml-20">

              <div class="flex flex-col lg:flex-row justify-evenly">

                <div class="flex flex-col lg:flex-row">
                  <img src="images/message.svg" alt="" class="lg:ml-18 lg:w-auto w-[50px] ml-20">
                  <p class="lg:ml-2 lg:mt-4">${discuss.comment_count}</p>
                </div>

                <div class="flex flex-col lg:flex-row">
                  <img src="images/eye.svg" alt="" class="lg:ml-1 lg:w-[30px] w-[50px] ml-20">
                  <p class="lg:ml-2 lg:mt-4">${discuss.view_count}</p>
                </div>

                <div class="flex flex-col lg:flex-row">
                  <img src="images/clock.svg" alt="" class="lg:ml-1 lg:w-[30px] w-[50px] ml-20">
                  <p class="lg:ml-2 lg:mt-4">${discuss.posted_time}</p>
                </div>

                <div class="card-actions justify-end">
                  <button class="btn  lg:mr-0 mr-16 rounded-full w-[58px] h-[58px]"><img src="images/email.svg" alt="" class=""></button>
                </div>
                
              </div>
            </div>
      `;
        discussContainer.appendChild(discussCard);
    })

    //hide loading spinner
    toggleLoadingSpinner(false);
}

// handle search button
const handleSearch = () => {
    toggleLoadingSpinner(true);
    setTimeout(() => {
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        console.log(searchText)
        loadAllPost(searchText);
        console.log(toggleLoadingSpinner)
    }, 2000)

}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}

// setTimeout( () =>{
//     console.log(toggleLoadingSpinner)
// } , 2000)

loadDiscusses();


