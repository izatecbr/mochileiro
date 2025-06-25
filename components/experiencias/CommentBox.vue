<template>
  <h2 class="text-30 pt-60">Leave a Reply</h2>
  <p class="mt-30">
    Your email address will not be published. Required fields are marked *
  </p>

  <div class="reviewsGrid pt-30">
    <div class="reviewsGrid__item">
      Location
      <div class="d-flex x-gap-5 pl-20">
        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>
      </div>
    </div>

    <div class="reviewsGrid__item">
      Amenities
      <div class="d-flex x-gap-5 pl-20">
        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>
      </div>
    </div>

    <div class="reviewsGrid__item">
      Food
      <div class="d-flex x-gap-5 pl-20">
        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>
      </div>
    </div>

    <div class="reviewsGrid__item">
      Room
      <div class="d-flex x-gap-5 pl-20">
        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>
      </div>
    </div>

    <div class="reviewsGrid__item">
      Price
      <div class="d-flex x-gap-5 pl-20">
        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>
      </div>
    </div>

    <div class="reviewsGrid__item">
      Tour Operator
      <div class="d-flex x-gap-5 pl-20">
        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>

        <i class="icon-star text-10 text-yellow-2"></i>
      </div>
    </div>
  </div>

  <div class="contactForm y-gap-30 pt-30">
    <div class="row y-gap-30">
      <div class="col-md-6">
        <div class="form-input">
          <input type="text" required />
          <label class="lh-1 text-16 text-light-1">Name</label>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-input">
          <input type="email" required />
          <label class="lh-1 text-16 text-light-1">Email</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="form-input">
          <input type="text" required />
          <label class="lh-1 text-16 text-light-1">Title</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="form-input">
          <textarea required rows="5"></textarea>
          <label class="lh-1 text-16 text-light-1">Comment</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <button class="button -md -dark-1 bg-accent-1 text-white">
          Post Comment
          <i class="icon-arrow-top-right text-16 ml-10"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
