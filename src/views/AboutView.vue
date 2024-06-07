<template>
  <main>
    <div class="about-me">
      <div class="photo">
        <img
          class="img"
          src="@assets/images/Bohater.jpeg"
          alt="Handsome man wearing construction helmet"
        />
      </div>
      <div class="content">
        <h1>About Me</h1>
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
          My journey in the construction industry began [X] years ago, and over the years, I have
          honed my skills and gained invaluable experience. I take pride in delivering high-quality
          results that exceed my clients' expectations.
        </p>
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
  justify-content: center;
  gap: 10px;
}

.photo {
  width: 300px;
  margin: 0 auto;
}

.photo img {
  width: 100%;
  border-radius: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
}

h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin: 0;
}

@media (min-width: 768px) {
  .about-me {
    flex-direction: row;
    gap: 20px;
    align-items: center;
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
