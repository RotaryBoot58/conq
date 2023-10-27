<style lang="scss">
    @import '../style.scss';

    header {
        background-color: var(--secondColor);
        height: 5rem;
        display: flex;
        /* padding: 0.5rem; */
        /* background-color: aliceblue; */
    }

    * {
        transition: all 0.2s;
    }

    #tasks-manager {
        width: 18rem;
    }

    #tasks-manager-content {
        height: calc(100% - 2rem);
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    #search {
        flex-grow: 1;
    }
</style>

<script context="module">
    //assets imports
    import ExportIcon from '../assets/export.svg';
    import AddTaskIcon from '../assets/add_task.svg';

    function logVisible() {
        console.log(visible)
    }

    export let visible = true

    export function toggleAddTask() {
        visible = !visible
        console.log(visible)
    }
</script>

<header>
    <div id="tasks-manager">

        <div class="title">
            Tasks manager
        </div>

        <div id="tasks-manager-content">
            <button on:click={logVisible} id="export-tasks" title="Export tasks">
                <img src={ExportIcon} alt="ExportIcon">
            </button>

            <button on:click={toggleAddTask} id="add-task" title="Create new task">
                <img src={AddTaskIcon} alt="AddTaskIcon">
            </button>
        </div>
    </div>
    <div id="search">
    </div>
</header>