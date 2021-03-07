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
const studentList = document.getElementsByClassName('student-list')
studentList.innerHTML = ""
console.log(list.length)
for (let i = 0; i < list.length; i++ )
{
   if (list[i] >= startIndex && list[i] < endIndex) {
      let studentItem = list[i]
      let li = document.createElement('li').className = "student-item cf"
      let div = document.createElement('div').className = "student-details"
      let img = document.createElement('img').className = "avatar"
      img.src = `data[${studentItem}].picture.medium`
      img.alt = "Profile Picture"
      let h3 = document.createElement('h3').innerHTML = `data[${studentItem}].name.first data[${studentItem}].name.last`
      let span = document.createElement('span').className = "email"
      span.innerHTML = `data[${studentItem}].email`
      div.appendChild(img, h3, span)
      let divJoined = document.createElement('div').className = "joined-details"
      let spanDate = document.createElement('span').className = "date"
      spanDate.innerHTML = `data[${studentItem}].registered.date`
      divJoined.appendChild(spanDate)
      studentList.insertAdjacentHTML(beforeend, studentItem)
      console.log('Student',studentItem)
   }
}
}
showPage(data,1)

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const addPagination = () => {
   
}


// Call functions
