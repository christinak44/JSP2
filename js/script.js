
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
      let li = document.createElement('li')
      li.className = "student-item cf"
      studentList.appendChild(li)
      let div = document.createElement('div')
      div.className = "student-details"
      li.appendChild(div)
      let img = document.createElement('img')
      img.className = "avatar"
      img.src = studentItem.picture.medium
      img.alt = "Profile Picture"
      div.appendChild(img)
      let h3 = document.createElement('h3')
      h3.innerHTML = studentItem.name['first']+(' ') + studentItem.name['last']
      div.appendChild(h3)
      let span = document.createElement('span')
      span.className = "email"
      span.innerHTML = studentItem.email
      div.appendChild(span)
      let divJoined = document.createElement('div')
      divJoined.className = "joined-details"
      div.appendChild(divJoined)
      //studentList.appendChild(divJoined)
      let spanDate = document.createElement('span')
      spanDate.className = "date"
      spanDate.innerHTML = studentItem.registered.date
      divJoined.appendChild(spanDate)
      //studentList.insertAdjacentHTML('beforeend', studentItem)
      console.log(studentList)
      console.log(div)
      console.log('Student', studentItem)
      console.log(studentItem.name['first'])
   }
   
   
   
}
}
showPage(data,1)

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
   console.log(linkList)
}
  
// linkList.addEventListener('click', () => {
//    if (button) {
//       activePage
//    }
// })

addPagination(data);
console.log(linkList)
// Call functions
