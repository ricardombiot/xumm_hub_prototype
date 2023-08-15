

export const JOB_CATEGORIES = [
    "Coding", 
    "Design", 
    "Apps Development", 
    "Website Design",
    "Prototype",
    "Marketing", 
    "Research",
    "Analysis",
    "Branding",
    "Startup", 
    "Contract", 
    "Speed",
    "Short Term Goals",
    "Schedule",
    "Team"
    
]

export function categories_default() : any {
    let categories : any = {}
    for (let index = 0; index < JOB_CATEGORIES.length; index++) {
        const category = JOB_CATEGORIES[index];
        categories[category] = false;
    }

    return categories;
}