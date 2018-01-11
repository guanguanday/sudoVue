	
	var sudoUtil=new Object({
		
		//�����
		const checkedRow=(arr,n)=>checkArray(arr[n]);
		
		//�������
		const checkArray=arr=>arr.filter(val=>val!=0).filter(i=>arr.indexOf(i)===arr.lastIndexOf(i)).toString()==arr.filter(val=>val!=0).toString();	
				
		//�����		
		const checkedCol=(arr,n)=>checkArray(Array.from(arr,row=>row[n]));
				
		//��������Ƿ���0
		const checkArrayHasZero=arr=>{
			
			let sign=false;
			
			arr.map(row=>row.map(cell=>{
				if(!cell)sign=true;
			}))
			
			return sign;
			
		}
		
		//��鹬
		const checkedGong=(arr,i,j)=>{
			
			let num=gong(i,j);
			
			let y=((num-1)%3)*3+1;
			
			let x=Math.floor((num-1)/3)*3+1;

			let narr=[arr[x-1][y-1],arr[x-1][y],arr[x-1][y+1],arr[x][y-1],arr[x][y],arr[x][y+1],arr[x+1][y-1],arr[x+1][y],arr[x+1][y+1]];
			
			return checkArray(narr);
			
		}
		
		//����������Ź���
		const checkArrayByIndex=(arr,x,y)=>{
			
			let signRow=false;
							
			let signCol=false;
							
			let signGong=false;
			
			//�����								
			signRow=checkedRow(arr,x);
			
			//�����
			signCol=checkedCol(arr,y);
			
			//��鹬
			signGong=checkedGong(arr,x,y);
									
			if(signRow&&signCol&&signGong){
				return true;
			}else{
				return false;
			}			
				
		}
		
		//��������
		const makeArray=(arr,n)=>{
					
			if(n==81){
				return arr;
			}
			
			let x=Math.floor(n/9);
			let y=n%9;
			
			if(arr[x][y]==0){
								
				let index=0;
				
				let arrn=makeRandomArray(9);
				for(let i=0;i<arrn.length;i++){
					
					arr[x][y]=arrn[i];				
					if(checkArrayByIndex(arr,x,y)){
						let endArr=makeArray(arr,n+1);
						if(!checkArrayHasZero(arr))return endArr;
					}
					
				}
						
				arr[x][y]=0;//����
				
			}else{
				makeArray(arr,n+1);
			}
			
			return arr;
		}
		
		//���������жϵڼ�����
		const gong=(i,j)=>{
			
			if(i<3&&j<3)return 1;
			if(i<3&&j<6)return 2;
			if(i<3&&j<9)return 3;
			if(i<6&&j<3)return 4;
			if(i<6&&j<6)return 5;
			if(i<6&&j<9)return 6;
			if(i<9&&j<3)return 7;
			if(i<9&&j<6)return 8;
			if(i<9&&j<9)return 9;
			
		}
		
		//����1��n�Ĳ��ظ�������
		const makeRandomArray=n=>{
			
			let arr=new Array(n);
			
			for(let i=0;i<n;i++){
				
				let index=0;
				
				let val="";
				
				do{
					
					val=randomNumber(n);
					
					index=arr.indexOf(val);
					
				}while(index!=-1)
				
				arr[i]=val;
				
			}
			
			return arr;
			
		}
		
		//�������1��n������	
		const randomNumber=n=>Math.floor(Math.random()*n+1);
				
		//��ʼ��һά����		
		const initArrayRow=(n,value)=>new Array(n).fill(value);
		
		//��ʼ����ά����
		const initArray=(n,value)=>Array.from(initArrayRow(n,value),()=>initArrayRow(n,value));
	
	});
	
	export default sudoUtil ;