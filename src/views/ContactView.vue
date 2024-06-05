<template>
  <main>
    <h1 class="heading">Get in Touch</h1>
    <form class="form" action="https://bohater-construction.co/contact-form" method="GET">
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
  </main>
</template>

<script></script>

<style scoped>

.heading {
  font-size: 48px;
  text-align: center;
  margin-bottom: 30px;
}

.form {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;
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
