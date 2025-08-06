from supabase import create_client, Client
import pandas as pd
import dash
from dash import html, dcc
from dash.dependencies import Input, Output
import plotly.express as px
import os

# --- CONFIGURAÇÃO SUPABASE ---
url = "https://zbsqlpfkjnertkeqwfdc.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpic3FscGZram5lcnRrZXF3ZmRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NzY2ODUsImV4cCI6MjA2NjA1MjY4NX0.lvC1LV4qvxt0-cquEvW5Aq1CADIAwLkkzOoaLoQMwbs"
supabase: Client = create_client(url, key)

# --- FUNÇÃO PARA OBTER DADOS ---
def obter_dados():
    response = supabase.table('contacts').select("*").execute()
    data = response.data
    df = pd.DataFrame(data)
    df['created_at'] = pd.to_datetime(df['created_at'])
    return df

# --- DASH APP ---
app = dash.Dash(__name__)

app.layout = html.Div(style={'fontFamily': 'Arial, sans-serif', 'padding': '20px'}, children=[
    html.H1('Dashboard de Usuários', style={'textAlign': 'center', 'marginBottom': '40px'}),

    html.H2('Gráfico de Cadastros por Dia'),
    dcc.Graph(id='grafico'),

    html.Hr(),

    html.H2('Tabela de Cadastros'),
    html.Div(id='tabela'),

    dcc.Interval(
        id='intervalo-atualizacao',
        interval=30*1000,  # 30 segundos
        n_intervals=0
    )
])

# --- CALLBACK PARA ATUALIZAR GRÁFICO E TABELA ---
@app.callback(
    Output('grafico', 'figure'),
    Output('tabela', 'children'),
    Input('intervalo-atualizacao', 'n_intervals')
)
def atualizar_dashboard(n):
    df = obter_dados()
    df_por_dia = df.groupby(df['created_at'].dt.date).size().reset_index(name='quantidade')
    fig = px.bar(df_por_dia, x='created_at', y='quantidade', title='Cadastros por dia')

    tabela = html.Table(style={
        'width': '100%',
        'borderCollapse': 'collapse',
        'marginTop': '20px',
    }, children=[
        html.Thead(html.Tr([
            html.Th('Name', style=estilo_cabecalho()),
            html.Th('Email', style=estilo_cabecalho()),
            html.Th('Phone', style=estilo_cabecalho()),
            html.Th('Created At', style=estilo_cabecalho()),
        ])),
        html.Tbody([
            html.Tr([
                html.Td(df.iloc[i]['name'], style=estilo_celula(i)),
                html.Td(df.iloc[i]['email'], style=estilo_celula(i)),
                html.Td(df.iloc[i]['phone'], style=estilo_celula(i)),
                html.Td(str(df.iloc[i]['created_at']), style=estilo_celula(i)),
            ]) for i in range(len(df))
        ])
    ])

    return fig, tabela

# --- ESTILOS DA TABELA ---
def estilo_cabecalho():
    return {
        'border': '1px solid #ddd',
        'padding': '8px',
        'backgroundColor': '#007BFF',
        'color': 'white',
        'textAlign': 'left'
    }

def estilo_celula(index):
    return {
        'border': '1px solid #ddd',
        'padding': '8px',
        'backgroundColor': '#f9f9f9' if index % 2 == 0 else '#ffffff'
    }

# --- RODAR APP ---
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    app.run(host='0.0.0.0', port=port, debug=True)
