async function login() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const res = await fetch('/.netlify/functions/admin-login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })

  const data = await res.json()

  if (data.token) {
    localStorage.setItem('admin_token', data.token)
    location.href = 'admin.html'
  } else {
    alert('Login inválido')
  }
}

// proteção do admin.html
async function protegerAdmin() {
  const token = localStorage.getItem('admin_token')
  if (!token) {
    location.href = 'admin-login.html'
    return
  }

  const res = await fetch('/.netlify/functions/admin-check', {
    headers: { Authorization: token }
  })

  if (res.status !== 200) {
    localStorage.removeItem('admin_token')
    location.href = 'admin-login.html'
  }
}
