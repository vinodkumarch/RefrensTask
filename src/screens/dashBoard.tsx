import * as React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {RenderItem} from '../components/renderItem';
import {dashBoardStyles} from './dashBoard.styles';
import {useDashBoard} from './useDashBoard';

export const DashBoard = () => {
  const {gridData, loading} = useDashBoard();
  return loading ? (
    <ActivityIndicator
      size={'large'}
      style={dashBoardStyles.loadingIndicator}
    />
  ) : (
    <FlatList
      testID="dashBoard.mainContainer"
      style={dashBoardStyles.container}
      data={gridData}
      renderItem={({item}) => <RenderItem item={item} />}
      numColumns={2}
    />
  );
};
