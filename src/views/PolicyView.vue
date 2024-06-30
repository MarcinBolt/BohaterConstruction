<template>
  <main>
    <div class="policy-container">
      <h1 class="heading">Privacy Policy</h1>
      <ul class="list">
        <li class="list-element">
          The processing of personal data is important to me. I value your trust in my company and
          stand for your privacy.
        </li>
        <li class="list-element">
          This privacy policy describes how I collect, use, and share personal data when you visit or
          use my website.
        </li>
        <li class="list-element">
          I do not identify you as an individual when you visit or use my website.
        </li>
        <li class="list-element">
          I only collect and use the information you actively provide. I do not collect personal data
          of minors.
        </li>
        <li class="list-element">
          I will not share personal data with third parties unless it is necessary by laws or
          regulations.
        </li>
        <li class="list-element">
          You can contact me via the contact page on my website - by filling the contact form.
        </li>
        <li class="list-element">
          This privacy policy may be updated. I will publish any changes on this page. If you disagree
          with the changes to this privacy policy, please leave this page.
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
.policy-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 760px;
  gap: 20px;
  margin: 0 auto;
}

.heading {
  text-align: center;
  margin-bottom: 10px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-element {
  font-size: 16px;
  margin-bottom: 5px;
}

@media (min-width: 480px) {
  .list-element {
    font-size: 18px;
  }
}
</style>



