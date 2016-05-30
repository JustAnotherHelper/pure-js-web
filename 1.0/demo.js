var handles = [];

handles[0] = new purity.label('Hello, World!');
handles[1] = new purity.div();
handles[2] = new purity.label('Label 1');
handles[3] = new purity.label('Label 2');
handles[1].add(handles[2]);
handles[1].add(handles[3]);

purity.setTitle('hello, world!');
purity.add(handles[0]);
purity.remove(handles[0]);

purity.add(handles[1]);




