import argparse

parser = argparse.ArgumentParser() 
parser.add_argument('--name')
parser.add_argument('--level')


args = parser.parse_args()
#args is Namespace(details=['asdf', 'a', 'a'], quickly=False, t='4', v=True)
name = args.name
level = args.level


f = open('src/app/app.module.ts','r')
filedata = f.read().replace('//New Pages',"import { "+name+"Page } from '../pages/"+name.lower()+"/"+name.lower()+"';\n//New Pages").replace('//New Names',"\t"+name+"Page,\n//New Names")
f.close()

f = open('src/app/app.module.ts','w')
f.write(filedata)
f.close()

f = open('src/pages/'+str(level)+'0/'+str(level)+'0.ts','r')
filedata = f.read().replace('//New Pages',"import { "+name+"Page } from '../"+name.lower()+"/"+name.lower()+"';\n//New Pages").replace('//New Names',"\t"+name.lower()+" = "+name+"Page;\n//New Names")
f.close()

f = open('src/pages/'+str(level)+'0/'+str(level)+'0.ts','w')
f.write(filedata)
f.close()

f = open('src/pages/'+str(level)+'0/'+str(level)+'0.html','r')
filedata = f.read().replace('<!-- New Buttons -->',"<ion-col>\n<button ion-button [navPush]="+name.lower()+">Order Steps</button>\n<br \>\n<progress-bar [bWidth]='levelPoints."+name.lower()+"'></progress-bar>\n</ion-col>\n<!-- New Buttons -->")
f.close()

f = open('src/pages/'+str(level)+'0/'+str(level)+'0.html','w')
f.write(filedata)
f.close()


