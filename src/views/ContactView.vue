<template>
  <main>
    <div class="contact-container">
      <h1 class="heading">Get in Touch</h1>
      <form class="form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button class="button" type="submit">Send</button>
      </form>
    </div>
  </main>
</template>

<script>
//TODO: add form sending massage logic
</script>

<style scoped>
.contact-container {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.heading {
  text-align: center;
  margin: 0;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
}

.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

label {
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

input,
textarea {
  color: #000;
  display: flex;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
}

textarea {
  height: 150px;
}
</style>
