<template>
  <div>
    <p>Your Profile</p>
  </div>
</template>

<script>

export default {
  middleware: 'auth',
  layout: "empty",
};

</script>