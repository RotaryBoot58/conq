export async function load({fetch}) {
    const tasksResponse = await fetch('http://localhost:3000/')
    const tasks = await tasksResponse.json()
    
    return {
        tasks
    }
}

/* export async function load({fetch}) {
    
    //eu posso criar varias fetchTasks que elas serão requisitadas ao mesmo tempo
    //com esse metodo

    const fetchTasks = async () => {
        const tasksResponse = await fetch('http://localhost:3000/')
        const tasksData = await tasksResponse.json()
        return tasksData.tasks
    }

    return {
        tasks: fetchTasks()
    }
} */