<style lang="scss">
    @import '../style.scss';

    main {
        background-color: var(--firstColor);
        height: calc(100vh - 5rem);
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        overflow-y: auto;
        position: relative;
    }
</style>

<script>
    import ExportIcon from '../assets/export.svg';
    import AddTaskIcon from '../assets/add_task.svg';

    //lib imports
    import SampleTask from '../lib/sampleTask.svelte';
    import CreateTask from '../lib/createTask.svelte';

    export let data
    const { tasks } = data

    let visible = true

    function toggleAddTask() {
        visible = !visible
    }

</script>

<header>
    <div id="tasks-manager">
        <div class="title">
            Tasks manager
        </div>

        <div id="tasks-manager-buttons">
            <button id="export-tasks" title="Export tasks">
                <img src={ExportIcon} alt="ExportIcon">
            </button>

            <button on:click={toggleAddTask} id="add-task" title="Create new task">
                <img src={AddTaskIcon} alt="AddTaskIcon">
            </button>
        </div>
    </div>
    <div id="search"></div>
</header>

<main id="main">
    {#each tasks as task (task.id)}
        <SampleTask taskTitle={task.title} taskUrl={task.url}/>
    {/each}

    {#if visible}
        <CreateTask/>
    {/if}
</main>