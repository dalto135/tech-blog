const logout = async () => {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }

  } catch (err) {
    res.status(500).json(err.message);
  }
};

var idleTime = 0;
var idleInterval = setInterval(timerIncrement, 60000);

document.addEventListener('mousemove', function() {
  idleTime = 0;
})
      
document.addEventListener('keydown', function() {
  idleTime = 0;
});

document.addEventListener('keyup', function() {
  idleTime = 0;
});

//The user is logged out if their screen is idle for 5 minutes
function timerIncrement() {
  idleTime = idleTime + 1;
  if (idleTime > 5) {
    logout();
  }
}

document
  .querySelector('#logout')
  .addEventListener('click', logout);
