
const commentFormHandler = async (event) => {
  try {
    event.preventDefault();
    console.log(event.target);
    // Collect values from the login form
    const content = document.querySelector('#commentinput').value.trim();
    
  
    if (content && event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/comments/${id}`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace(`/post/${id}`);
      } else {
        alert(response.statusText);
      }
    }

  } catch (err) {
    res.status(500).json(err.message);
  }
  };

document
  .querySelector('#commentbutton')
  .addEventListener('click', commentFormHandler);