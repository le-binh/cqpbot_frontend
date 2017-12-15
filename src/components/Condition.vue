<template>
  <div>
    <NameCondition v-if="nameCondition" @onChange="handleChange" @onCancel="handleCancel"/>
    <GenderCondition v-if="genderCondition" @onChange="handleChange" @onCancel="handleCancel"/>
    <LastInteractCondition v-if="lastInteractCondition" @onChange="handleChange" @onCancel="handleCancel"/>
    <SubscribedCondition v-if="subscribedCondition" @onChange="handleChange" @onCancel="handleCancel"/>
    <InboxCondition v-if="inboxCondition" @onChange="handleChange" @onCancel="handleCancel"/>
    <CommentCondition v-if="commentCondition" @onChange="handleChange" @onCancel="handleCancel"/>
    <LikeCondition v-if="likeCondition" @onChange="handleChange" @onCancel="handleCancel"/>
  </div>
</template>

<script>
  import NameCondition from '@/components/NameCondition'
  import GenderCondition from '@/components/GenderCondition'
  import LastInteractCondition from '@/components/LastInteractCondition'
  import InboxCondition from '@/components/InboxCondition'
  import SubscribedCondition from '@/components/SubscribedCondition'
  import CommentCondition from '@/components/CommentCondition'
  import LikeCondition from '@/components/LikeCondition'

  export default {
    props: ['condition'],
    computed: {
      nameCondition: function () {
        return this.condition === 'name'
      },
      genderCondition: function () {
        return this.condition === 'gender'
      },
      lastInteractCondition: function () {
        return this.condition === 'lastInteract'
      },
      subscribedCondition: function () {
        return this.condition === 'subscribed'
      },
      inboxCondition: function () {
        return this.condition === 'inbox'
      },
      commentCondition: function () {
        return this.condition === 'comments'
      },
      likeCondition: function () {
        return this.condition === 'likes'
      }
    },
    components: {
      NameCondition,
      GenderCondition,
      LastInteractCondition,
      InboxCondition,
      SubscribedCondition,
      CommentCondition,
      LikeCondition
    },
    methods: {
      handleChange: function (value) {
        this.$emit('commit', { key: this.condition, value })
      },
      handleCancel: function () {
        this.$emit('discard')
      }
    }
  }
</script>
