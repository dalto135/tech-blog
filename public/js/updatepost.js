//Update a post
const updateButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value;
  const content = document.querySelector('#post-content').value;
  const id = document.querySelector('#updatebutton').getAttribute('data-item');


  if (title && content) {
    console.log('ID: ' + id);
    console.log('Title: ' + title);
    console.log('Content: ' + content);
      
  
    const response = await fetch(`/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    // console.log('Response.ok: ' + response.ok);
    // alert('response.ok');

    document.location.replace('/profile');
    if (!response.ok) {
      console.log('Failed to update post');
      alert('!response.ok')
    }
  }
};

document
  .querySelector('#updateform')
  .addEventListener('click', updateButtonHandler);