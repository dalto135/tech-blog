//Create a post
const newFormHandler = async (event) => {
  try {
  event.preventDefault();

  const title = document.querySelector('#post-name').value.trim();
  const content = document.querySelector('#post-desc').value.trim();

  if (title && content) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }

} catch (err) {
  res.status(500).json(err.message);
}
};

//Delete a post
const delButtonHandler = async (event) => {
  try {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id);

    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
      console.log('response not ok');
    }
  } else {
    console.log('no data-id');
  }

} catch (err) {
  res.status(500).json(err.message);
}
};

//Update a post
const updateButtonHandler = async (event) => {
  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  try {
  if (title && content) {
  // if (event.target.hasAttribute('data-id')) {
    // const id = event.target.getAttribute('data-id');
    // console.log(id);

    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update post');
      // console.log('nope');
    }
  }

} catch (err) {
  res.status(500).json(err.message);
}
};

//Event listeners
document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('#updatebutton')
  .addEventListener('click', updateButtonHandler);
