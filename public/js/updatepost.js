//Update a post
const updateButtonHandler = async (event) => {
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    try {
    // if (title && content) {
    if (title && content && event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id);
      console.log(title);
      console.log(content);
  
      const response = await fetch(`/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to update post');
        console.log('Failed to update post');
      }
    }
  
    } catch (err) {
      res.status(500).json(err.message);
    }
  };

document
  .querySelector('.updateform')
  .addEventListener('click', updateButtonHandler);