<style lang="scss">
    #create-task {
        position: absolute;
        width: 48rem;
        align-self: center;
        background-color: var(--secondColor);
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 8rem;
        padding: 0.5rem;
        gap: 0.5rem;
    }

    input {
        all: unset;
        background-color: rgb(18, 50, 209);
    }
</style>

<script>
    import Title from './title.svelte'
</script>

<div id="create-task">
    <Title titleText="Create Task"/>

    <form action="post">
        <label for="new-task-title">Title</label>
        <input type="text" id="new-task-title" name="new-task-title">

        <label for="new-task-url">Link</label>
        <input type="text" id="new-task-url" name="new-task-url">
    </form>
</div>