//Update a post
const updateButtonHandler = async (event) => {
    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;
    const id = document.querySelector('#updatebutton').getAttribute('data-item');
    // const id = document.querySelector('#update-item').getAttribute('data-item');


    if (title && content) {
      console.log('ID: ' + id);
      console.log('Title: ' + title);
      console.log('Content: ' + content);
      
  
      const response = await fetch(`/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Response.ok: ' + response.ok);
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        console.log('Failed to update post');
      }
    }
  };

document
  .querySelector('#updateform')
  .addEventListener('submit', updateButtonHandler);