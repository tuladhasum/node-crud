module.exports = {
    
    //show all projects
    showProjects: (req, res) => {
        
        //create dummy events
        const projects = [
            { name: 'TRACS', slug: 'tracs',description: 'TRACS Project Description'},
            { name: 'Wish List', slug: 'wishlist',description: 'Wish List Project Description'},
            { name: 'Report Manager', slug: 'reportmanager',description: 'Report ManagerProject Description'}
        ];
        
        res.render('pages/projects', {projects: projects});
    }
}; 