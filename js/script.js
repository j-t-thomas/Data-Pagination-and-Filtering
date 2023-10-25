/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// Renders student cards to the page
function showPage(list, page) {
   const itemsPerPage = 9;
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let student = list[i];
         let html = `
            <li class = "student-item cf">
               <div class = "student-details">
                  <img class = "avatar" src = "${student.picture.large}" alt = "Profile Picture">
                  <h3>${student.name.first} ${student.name.last}</h3>
                  <span class = "email">${student.email}</span>
               </div>
               <div class = "joined-details">
                  <span class = "date">${student.registered.date}</span>
               </div>
            </li>
         `;
         studentList.insertAdjacentHTML('beforeend', html);
      }
   }
}

// Renders pagination buttons to the page
function addPagination(list) {
   let numPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   
   // Makes an active button
   for (let i = 1; i <= numPages; i++) {
      const active = i === 1 ? 'active' : ''; 
        const button = `
            <li>
                <button type="button" class="${active}">${i}</button>
            </li>
        `;
        linkList.insertAdjacentHTML('beforeend', button);

      // Event listener for pagination buttons
      linkList.addEventListener('click', (e) => {
      let activeButton = linkList.querySelector('button.active');
      if(e.target.tagName === "BUTTON") {
         activeButton.classList.remove('active');
         e.target.classList.add('active');
            showPage(list, e.target.textContent);
      }
   })
}
}



// Call functions
showPage(data, 1);
addPagination(data);