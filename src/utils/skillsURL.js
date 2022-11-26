export const skillsURL = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return 'https://developer.mozilla.org/en-US/docs/Web/HTML';
        case 'css':
            return 'https://developer.mozilla.org/en-US/docs/Web/CSS';
        case 'sass':
            return 'https://sass-lang.com/';
        case 'bootstrap':
            return 'https://getbootstrap.com/';
        case 'tailwind':
            return 'https://tailwindcss.com/';
        case 'javascript':
            return 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';    
        case 'typescript':
            return 'https://www.typescriptlang.org/';
        case 'react':
            return 'https://reactjs.org/';
        case 'reactjs':
            return 'https://reactjs.org/';
        case 'next js':
            return 'https://nextjs.org/';
        case 'postgresql':
            return 'https://www.postgresql.org/';
        case 'mongodb':
            return 'https://www.mongodb.com/';
        case 'python':
            return 'https://www.python.org/';
        case 'fastapi':
            return 'https://fastapi.tiangolo.com/';
        case 'django':
            return 'https://www.djangoproject.com/';
        case 'numpy':
            return 'https://numpy.org/';
        case 'pandas':
            return 'https://pandas.pydata.org/';
        case 'sklearn':
            return 'https://scikit-learn.org/';
        case 'tensorflow':
            return 'https://www.tensorflow.org/';
        case 'docker':
            return 'https://www.docker.com/';
        case 'aws':
            return 'https://aws.amazon.com/';
        default:
            break;
    }
}

