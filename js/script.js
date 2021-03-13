
/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const itemsPerPage = 9
const showPage = (list, page) => {
   startIndex = (page * itemsPerPage) - itemsPerPage
   endIndex = page * itemsPerPage
   const studentList = document.querySelector('.student-list')
   studentList.innerHTML = ""

   for (let i = 0; i < list.length; i++ )
   {
      let studentDetails = list[i]
      
      if (i >= startIndex && i < endIndex) {
         let studentItem = list[i]
      studentList.innerHTML += `
      <li class="student-item cf">
      <div class="student-details">
         <img class="avatar" src= ${studentItem.picture.medium} alt="Profile Picture">
         <h3>${studentItem.name['first']} ${studentItem.name['last']}</h3>
         <span class="email">${studentItem.email}</span>
      </div>
      <div class="joined-details">
         <span class="date">${studentItem.registered.date}</span>
      </div>
      </li>
      `
      }
      
      
      
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list) => {
   const numOfPages = Math.ceil(list.length/ itemsPerPage)
   const linkList = document.querySelector('.link-list')
   linkList.innerHTML = ""
   
   for (let i = 1; i <= numOfPages; i++) {
      let button = i
      linkList.innerHTML += `
      <li>
      <button type="button">${button}</button>
      </li>`
   }
   const activePage = document.querySelector('button')
   activePage.className = 'active'
   
   linkList.addEventListener('click', (e) => {
         
      if (e.target.tagName === 'BUTTON') {
            document.querySelector('.active').className = " "
            e.target.className = 'active'
            showPage(list, e.target.textContent)
         }
      })
}
  


// Call functions
showPage(data,1)
addPagination(data);