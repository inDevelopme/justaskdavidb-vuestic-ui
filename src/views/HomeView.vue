<script setup>
const nextSteps = [
  { icon: 'settings', title: 'Configuration', text: 'Deeply customize your project with our convenient mechanism.', link: 'https://ui.vuestic.dev/getting-started/configuration-guide'},
  { icon: 'dashboard', title: 'Kitchensink', text: 'Visit a showcase of all components.', link: 'https://ui.vuestic.dev/getting-started/kitchensink'},
  { icon: 'group', title: 'Community', text: 'Join our friendly community in Discord.', link: 'https://discord.gg/u7fQdqQt8c'},
  { icon: 'alt_route', title: 'Tree shaking', text: 'Learn how optimize your bundle size.', link: 'https://ui.vuestic.dev/getting-started/tree-shaking'},
  { icon: 'handshake', title: 'Contribution', text: 'Become a part of the ongoing development of Vuestic UI.', link: 'https://ui.vuestic.dev/contribution/guide'},
  { icon: 'star', title: 'Vuestic Admin', text: 'Try our admin template project.', link: 'https://admin.vuestic.dev/'},
]
</script>

<template>
  <div>
    <h5 class="app-title">
      Congratulations! <br />You've successfully installed the project.
    </h5>

    <h5 class="app-text">What's next?</h5>
    <div class="steps-row">
      <VaCard
        v-for="step in nextSteps"
        :key="step.title"
        :href="step.link"
        target="_blank"
        class="steps-column"
      >
        <VaCardTitle>
          <VaIcon class="steps-icon" :name="step.icon" />
          {{ step.title }}
          <VaIcon name="va-arrow-right" size="small" />
        </VaCardTitle>
        <VaCardContent>
          {{ step.text }}
        </VaCardContent>
      </VaCard>
    </div>
  </div>
</template>

<style scoped>
.app-title {
  font-size: 2rem;
  margin: 1.75rem;
  text-align: center;
}

.app-text {
  margin: 2rem 0;
  font-size: 1.75rem;
  text-align: center;
}

.steps-icon {
  margin-right: 0.5rem;
}

.steps-row {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  min-width: 0;
  max-width: 800px;
}

@media (max-width: 768px) {
  .steps-row {
    padding: 1rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
