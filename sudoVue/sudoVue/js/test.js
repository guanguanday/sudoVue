

	import sudoUtil from './sudoUtil'
	
	//grid��
	//���ݶ�ά���鶯̬����grid
	class Grid{
		
		constructor(array){
			this.array=array;
		}
		
		build(){
			this.array.map(rowArray=>rowArray.map(cellValue=>$("#main").append($("<div class='ndiv'>").append($("<span>").text(cellValue)))));
		}
	
	}
	
	//������
	$(()=>{
		
	var g=new Grid(sudoUtil.makeArray(sudoUtil.initArray(9,0),0));
	
	g.build();	
	
	})
	