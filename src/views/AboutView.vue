<template>
  <main>
    <div class="about-me">
      <div class="photo">
        <img class="img" src="/images/Bohater.jpeg" alt="Bohater Construction founder photo" />
      </div>
      <div class="content">
        <h1 class="heading">About Me</h1>
        <p>
          Welcome to Bohater Construction! My name is [Your Name], and I am the proud owner and sole
          operator of this one-man construction company. The name "Bohater" translates to "hero" in
          Polish, and it perfectly encapsulates my mission: to be the hero of your construction
          journey.
        </p>
        <p>
          With a deep passion for building and a commitment to excellence, I bring your plans and
          dreams to life with exceptional craftsmanship and unparalleled service.
        </p>
        <p>
          My journey in the construction industry began 5 years ago, and over the years, I have
          honed my skills and gained invaluable experience. I take pride in delivering high-quality
          results that exceed my clients' expectations.
        </p>
        <p>I also love to travel, meet new people, and explore different cultures.</p>
        <p>
          At Bohater Construction, I believe in building structures that stand the test of time. I
          use only the highest quality materials and employ sustainable practices to create spaces
          that are both beautiful and environmentally responsible.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
.about-me {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 20px;
}

.photo {
  width: 300px;
  margin: 0 auto;
}

.photo img {
  display: block;
  width: 100%;
  border-radius: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  max-width: 700px;
}

h1 {
  margin: 0;
}

p {
  font-size: 18px;
  margin: 0;
}

.highlight {
  font-weight: bold;
  color: red;
}

@media (min-width: 768px) {
  .about-me {
    flex-direction: row;
  }

  .photo {
    margin-bottom: 0;
    max-width: 340px;
    min-width: 280px;
  }

  .content {
    text-align: left;
  }
}
</style>
