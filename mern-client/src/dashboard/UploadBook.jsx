import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
function UploadBook() {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Book",
    "Travel",
    "Religion",
    "Art and Design"
  ]
  const [selectBookCategory, setSelectBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
    //console.log(event.target.value);
    setSelectBookCategory(event.target.value);
  }
  // handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const book = form.bookTitle.value;
    const description = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value;

    const bookObj = {
      bookTitle, authorName, imageURL, category, book, description, bookPDFUrl
    }
    console.log(bookObj);

    // send data to db
    fetch("http://localhost:3000/upload-book", {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {

      alert("Book is Uploaded Successfully ! ");
      form.reset();
    })

  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book name" required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author name" required />
          </div>
        </div>
        {/* second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image Url" />
            </div>
            <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book image url" required />
          </div>
          {/* category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <select id='inputState' name='categoryName' className='w-full rounded' value={selectBookCategory}
              onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option} selected={true}>{option}</option>)
              }
            </select>


          </div>


        </div>
        {/* book description */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name="bookDescription"
            placeholder="Write your book description..." required rows={6}
            className='w-full'
          />
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFUrl" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFUrl" name='bookPDFUrl' type="text" placeholder="Book pdf url" required />
        </div>

        <Button type="submit" className='mt-5'>Upload Book</Button>
      </form>
    </div>
  )
}

export default UploadBook