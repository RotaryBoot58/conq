<style lang="scss">
    @import '../style.scss';
</style>

<script>
    //assets imports
    import ExportIcon from '../assets/export.svg';
    import AddTaskIcon from '../assets/add_task.svg';

    //lib imports
    import SampleTask from '../lib/sampleTask.svelte';
    import CreateTask from '../lib/createTask.svelte';
    import Title from '../lib/title.svelte';

    function createNewTask() {
            
    }

    async function getTasks() {
        const response = await fetch('http://localhost:3000/read')
        return await response.json()
    }
</script>

<header>
    <div id="tasks-manager">
        <Title titleText="Tasks manager"/>
        <div id="tasks-manager-content">
            <button class="icon" id="export-tasks" title="Export tasks">
                <img src={ExportIcon} alt="ExportIcon">
            </button>

            <button on:click={createNewTask} class="icon" id="add-task" title="Create new task">
                <img src={AddTaskIcon} alt="AddTaskIcon">
            </button>
        </div>
    </div>
    <div id="search"></div>
</header>

<main id="main">
    {#await getTasks()}
        Carregando
    {:then tasks} 
        {#each tasks as task (task.id)}
            <SampleTask title={task.title} url={task.url}/>
        {/each}
    {/await}

    <CreateTask />
</main>