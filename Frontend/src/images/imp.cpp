#include "appartements.h"

appartements :: appartements()
{
    
    ref= new char [1];
    string ref;
    surfaces=new int [1];
    nbpieces=1;
    nbapp++;
}
appartements::appartements(char *s,int pieces):nbpieces(pieces)
{
    ref= new char [10];
    ref=s;
    surfaces=new int [pieces+1];
    for(int i=0;i<pieces;i++)
        surfaces[i]=0;
    nbapp++;

}
appartements::appartements(const appartements & app)
{
   
    nbpieces=app.nbpieces;
    ref =new char[strlen(app.ref)+1];
    ref=app.ref;
    surfaces=new int [nbpieces+1];
    for(int i=0;i<nbpieces;i++)
        surfaces[i]=app.surfaces[i];
    nbapp++;

}
appartements &appartements ::operator =(const appartements & app)
{
    if(this==&app) return *this;
    else
    {
        
        
        nbpieces=app.nbpieces;
        if (ref!=NULL)
        delete ref;
        ref=new char[strlen(app.ref)+1];
        ref=app.ref;
        if (surfaces!=NULL)
        delete [] surfaces;
        surfaces=new int [nbpieces+1];
        for(int i=0;i<nbpieces;i++)
            surfaces[i]=app.surfaces[i];
        return *this;
    }
}
int appartements::nbapp = 0;
void  appartements ::  SetSurfaces()
{
    cout<<"Entrez la surface de chacune des pièces de l’appartement ayant la référence "<< ref<<endl;
    for(int i=0;i<nbpieces;i++)
        cin>>surfaces[i];

}
int appartements :: loyer()
{
    int s=0;
    for(int i=0;i<nbpieces;i++)
        s+=surfaces[i];
    return(s*5*(1+nbpieces/10));

}
void appartements ::feuille_loyer ()
{
    
    cout<<ref<<"--"<<nbpieces<<"--"<<this->loyer()<<endl;
}
int appartements::get_nbappart()
{
    return(nbapp);
}
appartements :: ~appartements()
{
    delete[] surfaces;
    nbpieces=0;
    delete ref;
  
}
appartementsluxe ::appartementsluxe(char* s ,char * qu,int co,int pieces ):appartements(s ,pieces ),coefficient(co)
{
    quartier= new char [50];
    quartier=qu;

}
appartementsluxe::appartementsluxe(const appartementsluxe & app):appartements(app),coefficient(app.coefficient)
{
    quartier= new char [50];
    quartier=app.quartier;
}
appartementsluxe &appartementsluxe ::operator =(const appartementsluxe & app)
{
    if(this==&app) return *this;
    else
    {
        this->appartements::operator=(app);
       
        coefficient=app.coefficient;
        if(quartier!=NULL)
        delete quartier;
        quartier = new char[strlen(app.quartier)+1];
        quartier=app.quartier;
        return *this;
    }
}
int appartementsluxe :: loyer()
{
    int s=0;
    for(int i=0;i<nbpieces;i++)
        s+=surfaces[i];
    return((s*5*(1+nbpieces/10))*coefficient/10);

}
void appartementsluxe ::feuille_loyer ()
{
    cout<<ref<<"--"<<nbpieces<<"--"<<this->loyer()<<quartier<<"--"<<coefficient<<endl;
}
appartementsluxe::~appartementsluxe()
{
    delete quartier;
    coefficient = 0;
    delete[] surfaces;
    nbpieces=0;
    delete ref;
    
    
}