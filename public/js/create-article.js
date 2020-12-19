const simplemde = new SimpleMDE({
    element: document.querySelector('.editor > textarea'),
    initialValue: '# Hello World',
    status: ['autosave', 'lines', 'words'],
    toolbar: [
        'bold',
        'italic',
        'heading',
        '|',
        'quote',
        'link',
        'image',
        '|',
        'preview',
        'guide'
    ]
})
